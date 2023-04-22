import { useState, useEffect } from "react";
import "./Admin.scss";
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
import { NavLink } from "react-router-dom";
import { Globaladmin } from "../../context/Adminlogincontext";
import Adminz from "../../hooks/Admin";
import Adminlogin from "../../hooks/Adminlogin";

const Admin = () => {
  const {
    admin,
    adminerror,
    setAdminerror,
    loginload,
    setLoginload,
    drawload,
  } = Globaladmin();

  // this is the admin js hook

  const { adminlogin, loginmessage, setLoginmessage } = Adminlogin();

  useEffect(() => {
    setAdminerror(false);
    console.log(admin);
  }, []);
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

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });

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

  const handleSubmit = (e) => {
    if (password !== "" && email !== "") {
      if (!passwordveri && !emailveri) {
        setError(false);
        adminlogin(email, password);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="login ">
      <div className="login__form">
        <Typography
          variant="h4"
          sx={{
            color: "#005a34",
          }}
          className=" font-weight-bold text-center text-capitalize "
        >
          Admin
        </Typography>
        <Typography
          variant="span"
          className=" my-3 text-center d-block text-black-50 text-capitalize "
        >
          Manage Users.
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

        <Collapse in={loginmessage?.message}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setLoginmessage({});
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            }
            severity={"error"}
          >
            {loginmessage?.message}
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
          <CustomBtn
            onClick={handleSubmit}
            startIcon={<LockClockOutlined />}
            variant="contained"
            className=" my-3"
            disabled={!passwordveri && !emailveri ? false : true}
          >
            {loginload ? (
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

export default Admin;
