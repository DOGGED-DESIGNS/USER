import {
  Alert,
  Avatar,
  Button,
  Chip,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../../App.css";

import Adminz from "../../hooks/Admin";

import { Globaladmin } from "../../context/Adminlogincontext";
import image from "../../constants/image";
import { AddOutlined, Close, Replay } from "@mui/icons-material";
import Useallcontext from "../../hooks/Useallcontext";
import Adminlogin from "../../hooks/Adminlogin";
import { Textarea } from "@mui/joy";

const Feedback = () => {
  const { admindraw } = Adminz();

  const { reply, replymessage, setReplymessage } = Adminlogin();

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    admindraw();
  }, [toggle]);

  // usestate

  const [id, setId] = useState("");
  const [uid, setUid] = useState("");
  const [openz, setOpenz] = useState(false);
  const [error, setError] = useState(false);

  const handleClosez = () => {
    setOpenz(false);
  };

  const {
    admin,
    setAdminerror,
    hits,
    setHits,
    verifiedusers,
    setVerifiedusers,
    adminerror,
    loginload,
    setLoginload,
    dispatch,
    users,
    setUsers,
    setFeedback,
    setNotification,
    setVerifycount,
    setGendercount,
    setUsersnotes,
    setDeletedusers,
    setUnverifiedusers,
    feedback,
    notification,
    verifycount,
    gendercount,
    usersnotes,
    deletedusers,
    unverifiedusers,
    drawload,
    setDrawload,
  } = Globaladmin();

  const { admintext, setAdmintitle, admintitle, setAdmintext } =
    Useallcontext();

  const handleSubmit = (id, uid, type, message) => {
    reply(id, uid, type, message);
    setToggle(!toggle);
  };

  return (
    <>
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
            value={admintitle}
            onChange={(e) => {
              setAdmintitle(e.target.value);
              console.log(admintitle);
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
            value={admintext}
            onChange={(event) => {
              setAdmintext(event.target.value);
            }}
            minRows={2}
            maxRows={4}
            endDecorator={
              <Typography level="body3" sx={{ ml: "auto" }}>
                {admintext.length} character(s)
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
              handleSubmit(id, uid, admintitle, admintext);
              handleClosez();
            }}
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

      {/* snack bags */}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={replymessage?.message}
        autoHideDuration={1000}
        onClose={() => {
          setReplymessage({});
        }}
      >
        <Alert
          variant="filled"
          onClose={() => {
            setReplymessage({});
          }}
          severity={replymessage?.type}
          sx={{ width: "100%" }}
        >
          {replymessage?.message}
        </Alert>
      </Snackbar>
      {/* this is the end of snack bag */}
      <div className="container  mt-5 mb-3">
        <div className=" allusers">
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
              <TableHead sx={{ background: "#051E34" }}>
                <TableRow>
                  <TableCell className=" text-white-50 text-center font-weight-bold ">
                    Email
                  </TableCell>
                  <TableCell className=" text-white-50  tableCell text-center font-weight-bold  ">
                    Gender
                  </TableCell>
                  <TableCell className="text-white-50 text tableCell text-center font-weight-bold ">
                    photo
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    Phone_number
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    Date_of_Birth
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    status
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    Subject
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    Title
                  </TableCell>
                  <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedback?.map((row) => {
                  return (
                    <TableRow
                      className=" shadow-sm"
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        className=" text-center"
                        component="th"
                        scope="row"
                      >
                        {row.email}
                      </TableCell>
                      <TableCell className=" text-center">
                        {row.gender}
                      </TableCell>
                      <TableCell align="center">
                        <div className="">
                          <img
                            className=" rounded-circle "
                            style={{ width: "30px", height: "30px" }}
                            src={`${image.url}/${row.photo}`}
                          />
                        </div>
                      </TableCell>
                      <TableCell className=" text-center">
                        {row.phone}
                      </TableCell>
                      <TableCell className=" text-center">{row.bod}</TableCell>
                      <TableCell className=" text-center">
                        {row?.replied === "1" ? (
                          <p
                            className=" shadow-sm p-1"
                            style={{
                              borderRadius: "4px",
                              background: "#c8fec8",
                              color: "#039103",
                            }}
                          >
                            {" "}
                            replied{" "}
                          </p>
                        ) : (
                          <p
                            className=" shadow-sm p-1"
                            style={{
                              borderRadius: "4px",
                              color: "#910303",
                              background: "#fec8c8",
                            }}
                          >
                            {" "}
                            unreplied{" "}
                          </p>
                        )}
                      </TableCell>
                      <TableCell className=" text-center">
                        {row.subject}
                      </TableCell>
                      <TableCell className=" text-center">
                        {row.feedback}
                      </TableCell>
                      <TableCell className=" text-center">
                        <IconButton
                          onClick={() => {
                            // reply(row.id, row.uid, row.type, row.message);
                            setId(row.id);
                            setUid(row.uid);
                            setOpenz(true);

                            console.log(id);
                            console.log(uid);
                          }}
                        >
                          <Tooltip title="replay" arrow>
                            <Replay color="primary" size="small" />
                          </Tooltip>
                        </IconButton>
                      </TableCell>
                      {/* <TableCell className=" text-center">{row.method}</TableCell> */}
                      {/* <TableCell className={``}>
                    {" "}
                    <p className={`text-center ${row.status}`}>{row.status}</p>
                  </TableCell> */}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Feedback;
