import { useState } from "react";
import "./Forgot.scss";
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
  Send,
  SignLanguageOutlined,
  VisibilityOff,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Useallcontext from "../../hooks/Useallcontext";
import Signupz from "../../hooks/Signup";
import Errormessage from "../../components/Errormessage";

const Forgot = () => {
  const { verify, errormessage, sentmessage, setSentmessage } = Signupz();
  const { loadlogin, setLoadlogin, errorlogin, setErrorlogin } =
    Useallcontext();
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [visible, setVisible] = useState(false);
  const [verifymail, setVerifymail] = useState(false);
  const [error, setError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleSubmit = () => {
    // check if input is an empty field
    setError(false);
    if (email === "" || verifymail) {
      setError(true);
    } else {
      setError(false);
      verify(email);
      setConfirm(true);
    }
  };

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });

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
          Verify Your Email
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

        <Collapse in={sentmessage?.message}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSentmessage({});
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            }
            severity={sentmessage?.type}
          >
            {sentmessage?.message}
          </Alert>
        </Collapse>

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
          helperText={verifymail ? "invalid email" : ""}
          type={"email"}
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
            disabled={verifymail ? true : false}
            onClick={handleSubmit}
            className=" my-1"
            endIcon={<Send />}
            variant="contained"
          >
            {loadlogin ? (
              <CircularProgress sx={{ color: "white" }} size={"1rem"} />
            ) : (
              "Verify"
            )}
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
