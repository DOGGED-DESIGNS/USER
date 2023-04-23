import { useState } from "react";
import "./Navbar.scss";
import "../../App.css";
import Image from "../../constants";
import { NavLink } from "react-router-dom";
import {
  Button,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Fade,
  Badge,
  TextField,
  InputAdornment,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Skeleton,
  Collapse,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  FeedOutlined,
  Home,
  NotificationAdd,
  PowerOffOutlined,
  AccountCircle,
  NotificationsOutlined,
  ExitToAppOutlined,
  FeedbackOutlined,
  SearchOutlined,
  Close,
  Error,
  Send,
} from "@mui/icons-material";
import { width } from "@mui/system";
import { Textarea } from "@mui/joy";
import Useallcontext from "../../hooks/Useallcontext";
import Signupz from "../../hooks/Signup";

const Navbar = () => {
  const { searchz, postfeedback, setSentdelete, sentdelete } = Signupz();
  // useallcontext
  const {
    login,
    dispatch,
    drawload,
    users,
    notification,
    note,
    title,
    text,
    setTitle,
    setText,
  } = Useallcontext();
  const [toggle, setToggle] = useState(1);
  const [search, setSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  let open = Boolean(anchorEl);

  // const [open, setopen] = useState(false)

  const [openz, setOpenz] = useState(false);

  const [error, setError] = useState(false);

  const handleClickz = () => {
    setOpenz(true);
  };

  const handleClosez = () => {
    setOpenz(false);
  };
  // beginning of test

  // end of test
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    dispatch({ type: "LOGOUT" });
    setAnchorEl(null);

    console.log("i un close oo");
  };

  // handle feed

  const handleFeed = () => {
    if (title === "" || text === "") {
      setError(true);
    } else {
      setError(false);
      setOpenz(false);
      postfeedback(title, text);
    }
  };

  if (drawload) {
    return (
      <nav className="nav p-3  ">
        <Skeleton variant="rounded" width={"100%"} height="60px" />
      </nav>
    );
  } else {
    return (
      <>
        {sentdelete?.message && (
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={sentdelete?.message}
            autoHideDuration={1000}
            onClose={() => {
              setSentdelete({});
            }}
          >
            <Alert
              variant="filled"
              onClose={() => {
                setSentdelete({});
              }}
              severity={sentdelete?.type}
              sx={{ width: "100%" }}
            >
              {sentdelete?.message}
            </Alert>
          </Snackbar>
        )}
        <Dialog open={openz}>
          {users[0]?.verify == 0 ? (
            <>
              <DialogTitle className=" text-danger my-2 text-capitalize my-3">
                Please Verify your Email Address Inorder For you to send
                feedbacks to the admin
              </DialogTitle>
              <DialogContent>
                <Error
                  className=" d-block m-auto text-danger"
                  sx={{
                    color: "red",
                    fontSize: "45px",
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  className="mx-2"
                  variant="contained"
                  size="small"
                  color="secondary"
                  startIcon={<Close size="small" />}
                  onClick={handleClosez}
                >
                  Cancel
                </Button>
              </DialogActions>
            </>
          ) : (
            <>
              <DialogTitle className=" my-3">
                {" "}
                Send your feed back to us and get a prompt response{" "}
              </DialogTitle>
              <DialogContent>
                <Collapse className="my-3" in={error}>
                  <Alert
                    action={
                      <IconButton
                        variant="text"
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setError(false);
                        }}
                      >
                        <Close />
                      </IconButton>
                    }
                    severity={"error"}
                  >
                    please fill all form fields
                  </Alert>
                </Collapse>
                {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}
                <TextField
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                    display: "block",
                  }}
                  autoFocus
                  className=" my-2"
                  size="small"
                  margin="dense"
                  id="name"
                  label="Subject"
                  type="email"
                  fullWidth
                  variant="outlined"
                />

                <Textarea
                  placeholder="Type in here…"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  minRows={2}
                  maxRows={4}
                  endDecorator={
                    <Typography level="body3" sx={{ ml: "auto" }}>
                      {text.length} character(s)
                    </Typography>
                  }
                  sx={{ minWidth: 300 }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  className=" mx-1"
                  variant="contained"
                  size="small"
                  color="secondary"
                  startIcon={<Close size="small" />}
                  onClick={handleClosez}
                >
                  Cancel
                </Button>
                <Button
                  className=" mx-1"
                  variant="contained"
                  size="small"
                  color="info"
                  startIcon={<Send size="small" />}
                  onClick={handleFeed}
                >
                  send
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
        {!search && (
          <nav className="nav p-3">
            <div className=" align-items-center d-flex justify-content-between container">
              <NavLink to={"/home"}>
                <div className="nav__logo">
                  <img src={Image.Logo} alt="logo" />
                </div>
              </NavLink>
              <div className="nav__button">
                <NavLink to={"/home"} className=" text-decoration-none">
                  <Button
                    variant={toggle == 1 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(1);
                    }}
                    className={toggle == 1 ? "bat" : "text-black-50"}
                    startIcon={<Home />}
                  >
                    Home
                  </Button>
                </NavLink>
                <NavLink to={"/profile"}>
                  <Button
                    variant={toggle == 2 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(2);
                    }}
                    className={toggle == 2 ? "bat" : "text-black-50"}
                    startIcon={<AccountCircle fontSize="small" />}
                  >
                    Profile
                  </Button>
                </NavLink>
                <NavLink className=" text-decoration-none">
                  <Button
                    variant={toggle == 3 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(3);
                      handleClickz();
                    }}
                    className={toggle == 3 ? "bat" : "text-black-50 "}
                    startIcon={<FeedbackOutlined />}
                  >
                    Feedback
                  </Button>
                </NavLink>
              </div>

              <div style={{ width: "100px" }} className=" nav__icons ">
                <IconButton className=" ">
                  <SearchOutlined
                    onClick={() => {
                      setSearch(true);
                    }}
                  />
                </IconButton>
                <NavLink to={"/notification"} className=" text-decoration-none">
                  <IconButton>
                    {notification.length > 0 ? (
                      <Badge color="error" badgeContent={notification.length}>
                        <NotificationsOutlined />
                      </Badge>
                    ) : (
                      <NotificationsOutlined />
                    )}
                  </IconButton>
                </NavLink>
                <div className="  ">
                  <IconButton
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Avatar
                      src={`${Image.url}/${users[0].photo}`}
                      sx={{ width: "24px", height: "24px" }}
                      sizes="small"
                    />{" "}
                  </IconButton>{" "}
                  <span style={{ color: "#00311d" }}>{`${users[0].name.slice(
                    0,
                    6
                  )}..`}</span>
                </div>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ExitToAppOutlined fontSize="small" />
                    </ListItemIcon>
                    logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </nav>
        )}

        {search && (
          <nav className="nav p-3">
            <div className=" align-items-center d-flex justify-content-between container">
              <NavLink to={"/home"}>
                <div className="nav__logo">
                  <img src={Image.Logo} alt="logo" />
                </div>
              </NavLink>
              <div className="mx-2 justify-content-around nav__button">
                <NavLink to={"/"} className=" text-decoration-none">
                  <Button
                    variant={toggle == 1 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(1);
                    }}
                    className={toggle == 1 ? "bat" : "text-black-50"}
                  >
                    <Home />
                  </Button>
                </NavLink>
                <NavLink to={"/profile"} className=" text-decoration-none">
                  <Button
                    variant={toggle == 2 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(2);
                    }}
                    className={toggle == 2 ? "bat" : "text-black-50"}
                  >
                    <AccountCircle fontSize="small" />
                  </Button>
                </NavLink>
                <NavLink to={"/"} className=" text-decoration-none">
                  <Button
                    variant={toggle == 3 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(3);
                    }}
                    className={toggle == 3 ? "bat" : "text-black-50 "}
                  >
                    <FeedbackOutlined />
                  </Button>
                </NavLink>
              </div>
              <div className="mx-3" style={{ width: "700px" }}>
                <Autocomplete
                  onChange={(event, value) => {
                    searchz(value);
                  }}
                  size="small"
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={note?.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      className="mx-2"
                      sx={{
                        width: "100%",
                      }}
                      {...params}
                      placeholder="search"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlined fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>

              <div
                style={{ width: "250px" }}
                className=" align-items-center nav__icons "
              >
                <div>
                  <IconButton className=" ">
                    <SearchOutlined
                      onClick={() => {
                        setSearch(!search);
                      }}
                    />
                  </IconButton>
                </div>
                <div>
                  <NavLink
                    to={"/notification"}
                    className=" text-decoration-none"
                  >
                    <IconButton>
                      {notification.length > 0 ? (
                        <Badge color="error" badgeContent={notification.length}>
                          <NotificationsOutlined />
                        </Badge>
                      ) : (
                        <NotificationsOutlined />
                      )}
                    </IconButton>
                  </NavLink>
                  <div className="  ">
                    <IconButton
                      id="fade-button"
                      aria-controls={open ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Avatar
                        src={`${Image.url}/${users[0].photo}`}
                        sx={{ width: "24px", height: "24px" }}
                        sizes="small"
                      />{" "}
                    </IconButton>{" "}
                    <span style={{ color: "#00311d" }}>{`${users[0].name.slice(
                      0,
                      6
                    )}..`}</span>
                  </div>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    onClose={() => {
                      setAnchorEl(null);
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <ExitToAppOutlined fontSize="small" />
                      </ListItemIcon>
                      logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </nav>
        )}

        {/* this is the small nav */}

        <nav className="nav2 p-3">
          <div className=" align-items-center d-flex justify-content-between container ">
            <NavLink to={"/home"} className=" text-decoration-none">
              <div className="nav2__logo">
                <img src={Image.Logo} alt="logo" />
              </div>
            </NavLink>
            {!search && (
              <div className="mx-2 justify-content-around nav2__button">
                <NavLink className=" text-decoration-none" to={"/home"}>
                  <Button
                    size="small"
                    variant={toggle == 1 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(1);
                    }}
                    className={toggle == 1 ? "bat" : "text-black-50"}
                  >
                    <Home fontSize="small" />
                  </Button>
                </NavLink>
                <NavLink className=" text-decoration-none" to={"/profile"}>
                  <Button
                    size="small"
                    variant={toggle == 2 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(2);
                    }}
                    className={toggle == 2 ? "bat" : "text-black-50"}
                  >
                    <AccountCircle fontSize="small" />
                  </Button>
                </NavLink>
                <NavLink to={"/"} className=" text-decoration-none">
                  <Button
                    size="small"
                    variant={toggle == 3 ? "contained" : "text"}
                    onClick={() => {
                      setToggle(3);
                    }}
                    className={toggle == 3 ? "bat" : "text-black-50 "}
                  >
                    <FeedbackOutlined fontSize="small" />
                  </Button>
                </NavLink>
              </div>
            )}

            {search && (
              <Autocomplete
                onChange={(event, value) => {
                  searchz(value);
                }}
                size="small"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={note?.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className="mx-2"
                    sx={{
                      width: "200px",
                    }}
                    {...params}
                    placeholder="search"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlined fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            )}

            <div
              style={{}}
              className=" align-items-center   ml-auto nav2__icons "
            >
              <div className="d-flex   align-items-center  ml-auto ">
                <IconButton className="ml-auto ">
                  <SearchOutlined
                    sx={{ fontSize: "20px" }}
                    onClick={() => {
                      setSearch(!search);
                    }}
                  />
                </IconButton>
                <NavLink to={"/notification"} className=" text-decoration-none">
                  <IconButton>
                    {notification.length > 0 ? (
                      <Badge
                        color="error"
                        variant="dot"
                        sx={{ fontSize: "20px" }}
                        badgeContent={notification.length}
                      >
                        <NotificationsOutlined sx={{ fontSize: "18px" }} />
                      </Badge>
                    ) : (
                      <NotificationsOutlined />
                    )}
                  </IconButton>
                </NavLink>
                <div className="  ">
                  <IconButton
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Avatar
                      src={`${Image.url}/${users[0].photo}`}
                      sx={{ width: "24px", height: "24px" }}
                      sizes="small"
                    />{" "}
                  </IconButton>{" "}
                </div>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ExitToAppOutlined fontSize="small" />
                    </ListItemIcon>
                    logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
