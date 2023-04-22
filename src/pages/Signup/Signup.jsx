import { useState, useEffect } from "react";
import "./Signup.scss";
import "../../App.css";
import {
  Alert,
  CircularProgress,
  Collapse,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
// import TextField from '@material-ui/core/TextField';

import { Button, Typography, TextField } from "@mui/material";

import {
  AccountCircle,
  ArrowBack,
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
import { NavLink } from "react-router-dom";
import Errormessage from "../../components/Errormessage";
import Signupz from "../../hooks/Signup";

import Useallcontext from "../../hooks/Useallcontext";

const Signup = () => {
  // USEEFFECT
  useEffect(() => {
    setErrorlogin(false);
  }, []);

  // signup
  const { sign, errormessage } = Signupz();
  // use all context hook;
  const { loadlogin, setErrorlogin, errorlogin, setLoadlogin } =
    Useallcontext();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [password, setPassword] = useState("");
  const [verifypass, setVerifypass] = useState(Boolean);
  const [verifyuser, setVerifyuser] = useState(Boolean);
  const [verifymail, setVerifymail] = useState(Boolean);
  const [verifypassconfirm, setVerifypassconfirm] = useState(Boolean);

  // regix for fields

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{6,}$/;
  const passwordRegexconfirm = /^.{6,}$/;
  const username = /^[a-zA-Z0-9_-]{3,20}$/;

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });

  const handleSubmit = () => {
    // check if input is an empty field
    if (email === "" || name === "" || passconfirm === "" || password === "") {
      setError(true);
    } else {
      if (passconfirm !== password) {
        setVerifypassconfirm(true);
        console.log("i am here");
      } else {
        sign(name, password, email);
      }
    }
  };

  return (
    <div className="login ">
      <div className="login__form">
        <div className=" mr-auto my-2">
          <NavLink to={"/"}>
            <IconButton>
              {" "}
              <ArrowBack />{" "}
            </IconButton>
          </NavLink>
        </div>
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
          sx={{
            width: "100%",
          }}
          onChange={(e) => {
            setName(e.target.value);
            if (username.test(name)) {
              setVerifyuser(false);
            } else {
              setVerifyuser(true);
            }
          }}
          error={verifyuser}
          helperText={verifyuser ? "invalid username" : ""}
          size="small"
          type={"text"}
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          size="small"
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailRegex.test(email)) {
              setVerifymail(false);
            } else {
              setVerifymail(true);
            }
          }}
          error={verifymail}
          helperText={verifymail && "invalid email"}
          type="email"
          className="my-2"
          variant="outlined"
          placeholder="Email"
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
          sx={{
            width: "100%",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordRegex.test(password)) {
              setVerifypass(false);
            } else {
              setVerifypass(true);
            }
          }}
          error={verifypass}
          helperText={verifypass ? "invalid password" : ""}
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
        <TextField
          sx={{
            width: "100%",
          }}
          onChange={(e) => {
            setPassconfirm(e.target.value);
            if (passwordRegexconfirm.test(passconfirm)) {
              setVerifypassconfirm(false);
            } else {
              setVerifypassconfirm(true);
            }
          }}
          error={verifypassconfirm}
          helperText={verifypassconfirm ? " confirm password " : ""}
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="confirm password"
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

        <div className="  mt-4 ">
          <CustomBtn
            onClick={handleSubmit}
            disabled={
              verifymail || verifypass || verifypassconfirm || verifyuser
                ? true
                : false
            }
            className=" my-1"
            startIcon={<PersonAdd />}
            variant="contained"
          >
            {loadlogin ? (
              <CircularProgress size={"1rem"} sx={{ color: "white" }} />
            ) : (
              "SIGN_UP"
            )}
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Signup;
