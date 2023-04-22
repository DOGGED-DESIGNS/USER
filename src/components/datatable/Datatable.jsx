import { useState, useEffect } from "react";
import "./Datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Textarea } from "@mui/joy";

import "./Datatable.scss";

import { userColumns, userRows } from "../../datatablesource";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Add,
  AddOutlined,
  Close,
  Delete,
  DetailsOutlined,
  Error,
  ErrorOutlineOutlined,
  InfoOutlined,
  Update,
  UpdateOutlined,
} from "@mui/icons-material";
import Useallcontext from "../../hooks/Useallcontext";
import Signupz from "../../hooks/Signup";
import Drawusers from "../../hooks/Drawusers";

const Datatable = ({ info, link }) => {
  const {
    sentmessage,
    verify,
    setSentmessage,
    sentdelete,
    postnote,
    deleteone,
    setSinglenote,
    drawone,
    singlenote,
    drawtoupdate,
    setDrawtoupdate,
    drawto,
    setMessagupdate,
    updatenote,
    messagupdate,
    setSentdelete,
  } = Signupz();
  const { drawAll } = Drawusers();

  const {
    drawload,
    note,
    users,
    loadlogin,
    setLoadlogin,
    text,
    setText,
    title,
    setTitle,
  } = Useallcontext();

  const [open, setOpen] = useState(false);
  const [openz, setOpenz] = useState(false);

  const [error, setError] = useState(false);
  const [togglechange, setTogglechange] = useState(false);
  // this is the useEffect

  useEffect(() => {
    drawAll();
  }, [togglechange]);

  const handleClick = (noteid) => {
    setOpen(true);
    console.log(noteid);
    deleteone(noteid);
  };

  // handle submit

  const handleSubmit = () => {
    if (title === "" || text === "") {
      setError(true);
    } else {
      postnote(title, text);
      setOpenz(false);
      setTitle("");
      setText("");
      setTogglechange(!togglechange);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickz = () => {
    setOpenz(true);
  };

  const handleClosez = () => {
    setOpenz(false);
  };

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const actionColumn = [
    { field: "title", headerName: "TITLE", width: 100 },
    {
      field: "note",
      headerName: "NOTES",
      width: 180,
      // renderCell: (params) => {
      //   return (
      //     <div className=" d-flex   ">
      //       <img
      //         className=" img-fluid rounded-circle"
      //         style={{ width: "32px", height: "32px" }}
      //         src={params.row.img}
      //         alt="avatar"
      //       />
      //       <p className=" my-auto ml-2 font-weight-bold text-secondary">
      //         {params.row.username}
      //       </p>
      //     </div>
      //   );
      // },
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              onClick={() => {
                drawone(params.row.id);
              }}
              size="small"
              className=" mx-1"
              variant="contained"
              color="secondary"
            >
              <InfoOutlined size="small" />
            </IconButton>
            <IconButton
              onClick={() => {
                drawto(params.row.id);
              }}
              size="small"
              className=" mx-1"
              variant="contained"
            >
              <UpdateOutlined size="small" sx={{ color: "green" }} />
            </IconButton>

            <IconButton
              onClick={() => {
                handleClick(params.row.id);
              }}
              size="small"
              className=" mx-1"
              color="error"
            >
              <Delete size="small" />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" container ">
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

      {/* {messagupdate?.message && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            onClose={handleClose}
            severity={messagupdate?.type}
            sx={{ width: "100%" }}
          >
            {messagupdate?.message}
          </Alert>
        </Snackbar>
      )} */}

      {/* this is the backdrop component */}

      <Backdrop sx={{ color: "#fff", zIndex: "100" }} open={loadlogin}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* this is the dialog section */}
      <Dialog open={openz}>
        <DialogTitle className=" my-3"> Add you notes here</DialogTitle>
        <DialogContent>
          {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}

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
              please fill all the form fields
            </Alert>
          </Collapse>
          <TextField
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            sx={{
              width: "400px",
              display: "block",
            }}
            autoFocus
            className=" my-2"
            size="small"
            margin="dense"
            id="name"
            label="Title Here"
            type="text"
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
            size="small"
            className="mx-2"
            onClick={handleSubmit}
            variant="contained"
            startIcon={<AddOutlined />}
          >
            Add{" "}
          </Button>
          <Button
            size="small"
            startIcon={<Close />}
            className="mx-2"
            variant="contained"
            color="secondary"
            onClick={handleClosez}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>

      {/* this is the dialog for update note */}

      <Dialog open={drawtoupdate?.title}>
        <DialogTitle className=" my-3"> update you notes here</DialogTitle>
        <DialogContent>
          {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}

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
              please fill all the form fields
            </Alert>
          </Collapse>
          <TextField
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            sx={{
              width: "400px",
              display: "block",
            }}
            autoFocus
            className=" my-2"
            size="small"
            margin="dense"
            id="name"
            label="Title Here"
            type="text"
            fullWidth
            variant="outlined"
          />

          <Textarea
            value={text}
            placeholder="Type in here…"
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
            size="small"
            className="mx-2"
            onClick={() => {
              updatenote(drawtoupdate.id, title, text);
              console.log(drawtoupdate.id);
              console.log(title);
              console.log(text);
              setDrawtoupdate({});
              setTogglechange(!togglechange);
            }}
            variant="contained"
            startIcon={<UpdateOutlined />}
          >
            update{" "}
          </Button>
          <Button
            size="small"
            startIcon={<Close />}
            className="mx-2"
            variant="contained"
            color="secondary"
            onClick={() => {
              setDrawtoupdate({});
            }}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>

      {/* dialog for single note */}
      <Dialog open={singlenote?.title}>
        <DialogTitle className=" text-capitalize font-weight-bold my-3">
          {" "}
          Note Details{" "}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}

          <List components="button">
            <ListItem divider={true}>
              <ListItemText>
                <span className=" font-weight-bold">Title: </span>{" "}
                {singlenote?.title}
              </ListItemText>
            </ListItem>
            <ListItem divider={true}>
              <ListItemText>
                <span className=" font-weight-bold">Notes: </span>{" "}
                {singlenote?.note}
              </ListItemText>
            </ListItem>
            <ListItem divider={true}>
              <ListItemText>
                <span className=" font-weight-bold">Created: </span>{" "}
                {singlenote?.created_at}
              </ListItemText>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            startIcon={<Close />}
            className="mx-2"
            variant="contained"
            color="secondary"
            onClick={() => {
              setSinglenote({});
            }}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      {/* end of dialog for single note */}
      {/* this is the end of the dialog section */}

      {/* VERIFY SECTION */}

      <div className=" datatable">
        {drawload ? (
          <Skeleton
            className=" my-5"
            variant="rounded"
            width="100%"
            height="70px"
          />
        ) : (
          <div
            className=" p-3 my-3  shadow-sm "
            style={{ background: "whitesmoke" }}
          >
            {users[0]?.verify === "0" && !sentmessage?.message ? (
              <Collapse className="my-3" in={true}>
                <Alert
                  action={
                    <Button
                      variant="text"
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        verify(users[0]?.email);
                      }}
                    >
                      {loadlogin ? (
                        <CircularProgress size={"1rem"} sx={{ color: "red" }} />
                      ) : (
                        "verify"
                      )}
                    </Button>
                  }
                  severity={"error"}
                >
                  kindly verify your email address
                </Alert>
              </Collapse>
            ) : (
              ""
            )}
            {/* message from verifyed mail */}

            <Collapse className="my-3" in={sentmessage?.message}>
              <Alert
                action={
                  <IconButton
                    variant="text"
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      drawAll();
                      setSentmessage({});
                    }}
                  >
                    <Close size="small" />
                  </IconButton>
                }
                severity={sentmessage?.type}
              >
                {sentmessage?.message}
              </Alert>
            </Collapse>

            <Button
              startIcon={<Add />}
              size="small"
              onClick={handleClickz}
              className=" d-flex ml-auto "
              variant="contained"
            >
              Add_note
            </Button>
          </div>
        )}
        {drawload ? (
          <Skeleton variant="rounded" width="100%" height="70%" />
        ) : note.length < 1 ? (
          <div>
            <ErrorOutlineOutlined
              sx={{
                fontSize: "55px",
                color: "red",
              }}
              className=" d-block m-auto"
              size="large"
            />
            <Typography className=" text-danger text-center my-3">
              {" "}
              NO NOTE AVIALABLE{" "}
            </Typography>
          </div>
        ) : (
          <DataGrid
            className="shadow-sm"
            rows={note}
            columns={actionColumn}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};

export default Datatable;
