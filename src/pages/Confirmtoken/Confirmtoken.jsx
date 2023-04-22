import {
  Alert,
  IconButton,
  Input,
  Button,
  TextField,
  Typography,
  Collapse,
  InputAdornment,
  CircularProgress,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Globaladmin } from "../../context/Adminlogincontext";

import Adminlogin from "../../hooks/Adminlogin";
import "./Confirmtoken.scss";
import "../../App.css";
import {
  ArrowBack,
  Close,
  Send,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

const Confirmtoken = () => {
  // use state
  const {
    confirmtoken,
    forgortpassword,
    setForgotchange,
    forgotchange,
    replymessage,
    setReplymessage,
  } = Adminlogin();

  //   this is the global admin

  const { loginload, setLoginload } = Globaladmin();

  const passwordRegex = /^.{6,}$/;

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });
  // page errror

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [emailveri, setEmailveri] = useState(Boolean);
  const [passwordveri, setPasswordveri] = useState(Boolean);

  const handlePassword = (e) => {
    if (passwordRegex.test(e.target.value)) {
      setPasswordveri(false);
      setPassword(e.target.value);
    } else {
      setPasswordveri(true);
    }
  };

  // handle submit

  const handleSubmit = (e) => {
    if (password == "") {
      setError(true);
    } else {
      if (!passwordveri) {
        setError(false);
        forgortpassword(replymessage.message, password);
      } else {
        setPasswordveri(true);
      }
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailz = queryParams.get("email");
    const tokenz = queryParams.get("token");

    if (emailz && tokenz) {
      confirmtoken(emailz, tokenz);
    } else {
      navigate("/");
    }
  }, []);

  //
  if (!replymessage?.error) {
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
          {/* <Typography
              variant="h4"
              sx={{
                color: "#005a34",
              }}
              className=" font-weight-bold text-center text-capitalize "
            >
              
            </Typography> */}
          <Typography
            variant="span"
            className=" my-3 font-weight-bold text-center f d-block text-black-50 text-capitalize "
          >
            Changepassword
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

          <Collapse in={forgotchange?.message}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setForgotchange({});
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
              }
              severity={forgotchange.type}
            >
              {forgotchange.message}
            </Alert>
          </Collapse>

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

          <div className="  mt-4 ">
            <CustomBtn
              disabled={passwordveri ? true : false}
              onClick={handleSubmit}
              className=" my-1"
              endIcon={<Send />}
              variant="contained"
            >
              {loginload ? (
                <CircularProgress sx={{ color: "white" }} size={"1rem"} />
              ) : (
                "change_password"
              )}
            </CustomBtn>
          </div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    return (
      <div className="login">
        <Alert variant="filled" severity="error">
          {replymessage?.message}
        </Alert>
      </div>
    );
  }
};

export default Confirmtoken;
