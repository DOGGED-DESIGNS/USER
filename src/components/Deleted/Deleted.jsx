import { useEffect, useState } from "react";
import { Globaladmin } from "../../context/Adminlogincontext";
import Adminz from "../../hooks/Admin";
import image from "../../constants/image";
import "../../App.css";
import { RestoreOutlined } from "@mui/icons-material";
import {
  Alert,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Deleted.scss";
import Adminlogin from "../../hooks/Adminlogin";
const Deleted = () => {
  const { admindraw } = Adminz();

  const { replymessage, setReplymessage, restoreusers } = Adminlogin();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    admindraw();
  }, [toggle]);

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
  // email,phone,photo,gender,bod
  return (
    <div className="container mt-5 mb-3">
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
      <div className="allusers">
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
            <TableHead sx={{ background: "#051E34" }}>
              <TableRow>
                <TableCell className=" text-white-50 text-center font-weight-bold ">
                  Email
                </TableCell>
                <TableCell className=" text-white-50  tableCell text-center font-weight-bold  ">
                  phone_number
                </TableCell>
                <TableCell className="text-white-50 text tableCell text-center font-weight-bold ">
                  Photo
                </TableCell>
                <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                  Gender
                </TableCell>
                <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                  Date_of_Birth
                </TableCell>
                <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                  status
                </TableCell>
                <TableCell className=" text-white-50 text text-center tableCell font-weight-bold ">
                  action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deletedusers?.map((row) => {
                return (
                  <TableRow
                    className=" shadow-sm"
                    key={row.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className=" text-center"
                      component="th"
                      scope="row"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell className=" text-center">{row.gender}</TableCell>
                    <TableCell align="center">
                      <div className="">
                        <img
                          className=" rounded-circle "
                          style={{ width: "30px", height: "30px" }}
                          src={`${image.url}/${row.photo}`}
                        />
                      </div>
                    </TableCell>
                    <TableCell className=" text-center">{row.phone}</TableCell>
                    <TableCell className=" text-center">{row.bod}</TableCell>
                    <TableCell className=" text-center">
                      {row?.verify === "1" ? (
                        <p
                          className=" shadow-sm p-1"
                          style={{
                            borderRadius: "4px",
                            background: "#c8fec8",
                            color: "#039103",
                          }}
                        >
                          {" "}
                          verified{" "}
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
                          unverified{" "}
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <IconButton
                        onClick={() => {
                          // console.log(row.id);
                          restoreusers(row.id);
                          setToggle(!toggle);
                        }}
                      >
                        <RestoreOutlined color="primary" size="small" />
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
  );
};

export default Deleted;
