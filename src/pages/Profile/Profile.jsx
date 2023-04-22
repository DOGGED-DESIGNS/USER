import {
  Alert,
  Button,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import Image from "../../constants";
import Useallcontext from "../../hooks/Useallcontext";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../App.css";
import "./Profile.scss";
import { Close, PhotoCamera } from "@mui/icons-material";
import Drawusers from "../../hooks/Drawusers";
import Signupz from "../../hooks/Signup";

const Profile = () => {
  // use all context
  const { drawAll } = Drawusers();

  const {
    update,
    setSentpass,
    sentpass,
    setSentmessage,
    changePass,
    sentmessage,
  } = Signupz();

  useEffect(() => {
    drawAll();
  }, []);

  const { users, drawload } = Useallcontext();
  const [value, setValue] = useState(0);

  const [name, setName] = useState("");
  const [bod, setBod] = useState("");
  const [errorpass, setErrorpass] = useState(false);
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);
  const [currentpass, setCurrentpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [verifycurrent, setVerifycurrent] = useState(false);
  const [verifynew, setVerifynew] = useState(false);
  const [verifyconfirm, setVerifyconfirm] = useState(false);

  // this is the password regex

  const passwordRegex = /^.{6,}$/;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  // handle submit

  const handleUpdatepass = () => {
    setErrorpass(false);
    if (currentpass === "" || newpass === "" || confirmpass === "") {
      setErrorpass(true);
    } else {
      if (confirmpass !== newpass) {
        setVerifyconfirm(true);
      } else {
        changePass(users[0]?.email, currentpass, newpass);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    if (name === "" && bod === "" && phone === "" && gender === "") {
      setError(true);
    } else {
      const formData = new FormData();
      formData.append("name", event.target.elements.name.value);
      formData.append("image", event.target.elements.image.files[0]);
      formData.append("bod", event.target.elements.date.value);
      formData.append("phone", event.target.elements.number.value);
      formData.append("userid", event.target.elements.userid.value);
      formData.append("gender", event.target.elements.gender.value);
      formData.append("message", event.target.elements.message.value);
      formData.append("genimage", event.target.elements.genimage.value);

      update(formData);
    }
  };

  if (drawload) {
    return (
      <div className="container ">
        <Skeleton
          variant="rounded"
          width={"100%"}
          height="700px"
          className=" my-4"
        />
      </div>
    );
  } else {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="container">
          <div className=" mt-5 border profile ">
            <Paper className="w-100">
              <Tabs
                className=" mr-auto"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label=" Profile" />
                <Tab label="Edit Profile" />
                <Tab label="Change Password" />
              </Tabs>
            </Paper>{" "}
            <div className=" " style={{ height: "auto" }}>
              <div className={value == 0 ? "row  p-3 mt-3 " : "d-none"}>
                <div className="  col-lg-6 col-md-6 col-sm-12">
                  <List components="button">
                    <ListItem divider={true}>
                      <ListItemText>
                        <span className=" font-weight-bold">Name: </span>{" "}
                        {users[0]?.name}
                      </ListItemText>
                    </ListItem>
                    <ListItem divider={true}>
                      <ListItemText>
                        <span className=" font-weight-bold">Email: </span>{" "}
                        {users[0]?.email}
                      </ListItemText>
                    </ListItem>
                    <ListItem divider={true}>
                      <ListItemText>
                        <span className=" font-weight-bold">Phone: </span>{" "}
                        {users[0]?.phone}
                      </ListItemText>
                    </ListItem>
                    <ListItem divider={true}>
                      <ListItemText>
                        <span className=" font-weight-bold">Gender: </span>{" "}
                        {users[0]?.gender}
                      </ListItemText>
                    </ListItem>
                    <ListItem divider={true}>
                      <ListItemText>
                        <span className=" font-weight-bold">
                          Date of Birth:{" "}
                        </span>{" "}
                        {users[0]?.bod}
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm12">
                  <div className="profile-img shadow-sm p-3 ">
                    <img
                      src={`${Image.url}/${users[0].photo}`}
                      alt="user image"
                    />
                  </div>
                </div>
              </div>

              {/* this is the edit prfile section */}
              <div className={value == 1 ? "row  p-3 mt-3 " : "d-none"}>
                <div className="  col-lg-6 col-md-6 col-sm-12">
                  <div className="profile-img shadow-sm p-3 ">
                    <img
                      src={`${Image.url}/${users[0]?.photo}`}
                      alt="user image"
                    />
                  </div>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm12">
                  <div>
                    {/* message */}
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
                        please fill all the form fields
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
                    <form onSubmit={handleSubmit}>
                      <span className=" text-black-50">
                        upload profile image
                      </span>
                      <input
                        accept="image/*"
                        className=" d-none"
                        id="icon-button-file"
                        type="file"
                        name="image"
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                      <TextField
                        size="small"
                        label="name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type={"text"}
                        value={users[0].name}
                        name="name"
                        className="my-3"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                      <TextField
                        size="small"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        label="Phone number"
                        name="number"
                        type={"number"}
                        className="my-2"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                      <TextField
                        size="small"
                        name="userid"
                        type="hidden"
                        value={users[0].id}
                        className="my-2 d-none"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                      <TextField
                        size="small"
                        name="message"
                        type="hidden"
                        value={"updateprofile"}
                        className="my-2 d-none"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                      <TextField
                        size="small"
                        name="genimage"
                        type="hidden"
                        value={users[0].photo}
                        className="my-2 d-none"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                      <FormControl className=" my-2 " sx={{ width: "100%" }}>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                          size="small"
                          name="gender"
                          variant="outlined"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Gender"
                        >
                          <MenuItem value={"male"}>male</MenuItem>
                          <MenuItem value={"female"}>female</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        size="small"
                        type={"date"}
                        label="Date of birth"
                        name="date"
                        className="my-3"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        className="mt-3"
                        sx={{ width: "100%" }}
                      >
                        Update
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={value == 2 ? "row  p-3 mt-3 " : "d-none"}>
                <div className="  col-lg-6 col-md-6 col-sm-12">
                  <div>
                    <Collapse in={errorpass}>
                      <Alert
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setErrorpass(false);
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        }
                        severity={"error"}
                      >
                        please fill all the form fields
                      </Alert>
                    </Collapse>
                    <Collapse in={sentpass?.message}>
                      <Alert
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setSentpass({});
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        }
                        severity={sentpass?.type}
                      >
                        {sentpass?.message}
                      </Alert>
                    </Collapse>
                    <TextField
                      size="small"
                      onChange={(e) => {
                        setCurrentpass(e.target.value);
                        if (passwordRegex.test(e.target.value)) {
                          setVerifycurrent(false);
                        } else {
                          setVerifycurrent(true);
                        }
                      }}
                      error={verifycurrent}
                      helperText={verifycurrent && "invalid password format"}
                      label="current password"
                      className="my-3"
                      type={"password"}
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      size="small"
                      onChange={(e) => {
                        setNewpass(e.target.value);
                        if (passwordRegex.test(e.target.value)) {
                          setVerifynew(false);
                        } else {
                          setVerifynew(true);
                        }
                      }}
                      error={verifynew}
                      helperText={verifynew && "invalid password format"}
                      label="new password"
                      type={"password"}
                      className="my-3"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      size="small"
                      onChange={(e) => {
                        setConfirmpass(e.target.value);
                        if (passwordRegex.test(e.target.value)) {
                          setVerifyconfirm(false);
                        } else {
                          setVerifyconfirm(true);
                        }
                      }}
                      error={verifyconfirm}
                      helperText={verifyconfirm && "invalid password format"}
                      type={"password"}
                      label="confirm your new password"
                      className="my-2"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />

                    <Button
                      onClick={handleUpdatepass}
                      variant="contained"
                      className="mt-3"
                      disabled={
                        verifyconfirm || verifycurrent || verifynew
                          ? true
                          : false
                      }
                      sx={{ width: "100%" }}
                    >
                      Update Password
                    </Button>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm12">
                  <div className="profile-img shadow-sm p-3 ">
                    <img
                      src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg"
                      alt="user image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
