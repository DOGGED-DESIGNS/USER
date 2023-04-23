import { useState, useEffect } from "react";
import "./Login.scss";
import "../../App.css";
import {
  Alert,
  Checkbox,
  CircularProgress,
  Collapse,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";

import Loginhook from "../../hooks/Loginhook";
// import TextField from '@material-ui/core/TextField';

import { Button, Typography, TextField } from "@mui/material";

import {
  AccountCircle,
  CheckBox,
  Close,
  Email,
  EmailOutlined,
  LockClockOutlined,
  LoginOutlined,
  PersonAdd,
  SignLanguageOutlined,
  VisibilityOff,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Navigate, NavLink } from "react-router-dom";

import Useallcontext from "../../hooks/Useallcontext";
import Errormessage from "../../components/Errormessage";

const Login = () => {
  // this is the login hook
  const { login, errorlogin, setErrorlogin, loadlogin, setLoadlogin } =
    Useallcontext();
  const { loginUsers, errormessage, setErrormessage } = Loginhook();

  useEffect(() => {
    setErrorlogin(false);
  }, []);

  if (!loadlogin) {
    console.log(errormessage);
    console.log("it is done loading");
    console.log(login.auth.token);
    console.log(errorlogin);
  }

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{6,}$/;
  // page errror

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [emailveri, setEmailveri] = useState(Boolean);
  const [passwordveri, setPasswordveri] = useState(Boolean);

  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });

  // email field

  const handleEmail = (e) => {
    if (emailRegex.test(e.target.value)) {
      setEmailveri(false);
      setEmail(e.target.value);
    } else {
      setEmailveri(true);
    }
  };

  // password field

  const handlePassword = (e) => {
    if (passwordRegex.test(e.target.value)) {
      setPasswordveri(false);
      setPassword(e.target.value);
    } else {
      setPasswordveri(true);
    }
  };

  // handlesubmit

  const handleSubmit = async (e) => {
    setErrorlogin(false);
    if (password !== "" && email !== "") {
      if (!passwordveri && !emailveri) {
        setError(false);
        await loginUsers(email, password);
        setOpen(true);
      }
    } else {
      setError(true);
      setOpen(true);
    }
  };

  return (
    <div className="login ">
      <div className="login__form">
        {/* {error && (
          <Errormessage
            message="please fill all form fields"
            error={error}
            alert="error"
            setting={setErrorlogin}
          />
        )} */}

        {/* {errorlogin && (
          <Errormessage
            message={errormessage}
            error={errorlogin}
            alert="error"
            setting={setErrorlogin}
          />
        )} */}

        <Typography
          variant="h4"
          sx={{
            color: "#005a34",
          }}
          className=" font-weight-bold text-center text-capitalize "
        >
          Welcome!
        </Typography>
        <Typography
          variant="span"
          className=" my-3 text-center d-block text-black-50 text-capitalize "
        >
          Start your journey with us today.
        </Typography>
        <Collapse in={error}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setError(false);
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            }
            severity={"error"}
          >
            please fill all form fields
          </Alert>
        </Collapse>

        <Collapse in={errorlogin}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorlogin(false);
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            }
            severity={"error"}
          >
            {errormessage}
          </Alert>
        </Collapse>

        <TextField
          onChange={handleEmail}
          sx={{
            width: "100%",
          }}
          type="email"
          error={emailveri}
          helperText={emailveri && "invalid email"}
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={passwordveri}
          onChange={handlePassword}
          sx={{
            width: "100%",
          }}
          helperText={passwordveri && "invalid password"}
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="password"
          type={visible ? "text" : "password"}
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? (
                    <VisibilityOutlined fontSize="small" />
                  ) : (
                    <VisibilityOffOutlined fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <CustomText
          width={"100%"}
          size="small"
          error={true}
          helperText="this "
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <VisibilityOffOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <div className=" my-2 d-flex w-100 align-items-center">
          <div className=" flex-grow-1">
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            Remember me
          </div>

          <div>
            <NavLink to={"/forgot"} className=" text-decoration-none">
              <span>Forgot Password?</span>
            </NavLink>
          </div>
        </div>

        <div className="  mt-4 ">
          <NavLink to={"/signup"} className="text-decoration-none">
            <CustomBtn
              className=" my-1"
              startIcon={<PersonAdd />}
              variant="contained"
            >
              Sign_Up
            </CustomBtn>
          </NavLink>
          <CustomBtn
            onClick={handleSubmit}
            startIcon={<LockClockOutlined />}
            variant="contained"
            className=" my-3"
            disabled={!passwordveri && !emailveri ? false : true}
          >
            {loadlogin ? (
              <CircularProgress sx={{ color: "white" }} size="1rem" />
            ) : (
              "LOGIN"
            )}
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Login;
