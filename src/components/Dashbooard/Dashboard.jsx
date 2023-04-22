import {
  DeleteForeverOutlined,
  DescriptionOutlined,
  FeedbackOutlined,
  GroupOutlined,
  NotificationsActiveOutlined,
  People,
  PeopleOutline,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/joy";
import { IconButton } from "@mui/material";
import { height } from "@mui/system";
import { useEffect, useState } from "react";
import "../../App.css";
import Piez from "../PIe/Pie";
import Adminz from "../../hooks/Admin";
import { useDeferredValue } from "react";
import { Globaladmin } from "../../context/Adminlogincontext";
import "./Dashboard.scss";
const Dashboard = () => {
  const { admindraw } = Adminz();

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

  const [vc, setVc] = useState([]);
  const [gc, setGc] = useState([]);

  const changevc = (val) => {
    setVc(val);
  };
  const changegc = (val) => {
    setGc(val);
  };

  useEffect(() => {
    admindraw();
  }, []);

  return (
    <div
      className=" contzz container p-3"
      style={{ height: "100vh", overflowX: "scroll" }}
    >
      <div className="row">
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#fec8c8" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <PeopleOutline sx={{ color: "#910303" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">{hits[0]?.hits}</Typography>
                <Typography level="body1">Total Visitors</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <GroupOutlined sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">{users.length} </Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#cbc8fe" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <FeedbackOutlined sx={{ color: "#0a0391" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5"> {feedback.length} </Typography>
                <Typography level="body1">Total Feedbacks</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#f6c8fe" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <NotificationsActiveOutlined sx={{ color: "#7c0391" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5"> {notification.length} </Typography>
                <Typography level="body1">Admin Notification</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row">
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c8f5fe" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <DeleteForeverOutlined sx={{ color: "#037991" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5"> {deletedusers.length} </Typography>
                <Typography level="body1">Deleted Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#cce4fa" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <DescriptionOutlined sx={{ color: "#0d4e87" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5"> {usersnotes.length} </Typography>
                <Typography level="body1">Total Notes</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c8fee9" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <VerifiedUserOutlined sx={{ color: "#03915b" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5"> {verifiedusers.length} </Typography>
                <Typography level="body1">Verfied Users</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" row">
        <div className=" py-3  col-lg-6 col-md-6 col-sm-12">
          <div
            className="m-auto borde   shadow-sm "
            style={{
              width: "400px",
              borderRadius: "4px",
              overflow: "hidden",
              height: "400px",
            }}
          >
            <Typography
              level="h4"
              sx={{ background: "#051E34" }}
              className=" text-white-50 d-block text-center text-capitalize"
            >
              {" "}
              Gender{" "}
            </Typography>
            <Piez data={gendercount} />
          </div>
        </div>
        <div className=" py-3 col-lg-6 col-md-6 col-sm-12">
          <div
            className="m-auto  my-3 shadow-sm "
            style={{
              width: "400px",
              borderRadius: "4px",
              overflow: "hidden",
              height: "400px",
            }}
          >
            <Typography
              level="h4"
              sx={{ background: "#051E34" }}
              className=" text-white-50 d-block text-center text-capitalize"
            >
              {" "}
              Verified Users{" "}
            </Typography>
            <Piez data={verifycount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
