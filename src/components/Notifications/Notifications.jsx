import {
  Alert,
  Avatar,
  Chip,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../../App.css";
import "./Notification.scss";
import Adminz from "../../hooks/Admin";

import { Globaladmin } from "../../context/Adminlogincontext";
import image from "../../constants/image";
import { Close } from "@mui/icons-material";
import Adminlogin from "../../hooks/Adminlogin";

const Notifications = () => {
  const { admindraw } = Adminz();
  const { adminlogin, replymessage, setReplymessage, deletefeed } =
    Adminlogin();
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

  return (
    <div className=" my-5 container">
      {/* beginning of snack bags */}

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

      {/* end of snackbags */}
      {feedback?.map((feed) => {
        return (
          <div className="allfeed my-4 p-3 shadow-sm ">
            <div className=" d-flex align-items-center ">
              <Chip
                className="my-3"
                avatar={
                  <Avatar alt="Natacha" src={`${image.url}/${feed.photo}`} />
                }
                label={feed.name}
                variant="outlined"
              />
              <div className=" ml-auto">
                <IconButton
                  size="small"
                  onClick={() => {
                    deletefeed(feed.id);
                    setToggle(!toggle);
                  }}
                >
                  <Close size="small" />
                </IconButton>
              </div>
            </div>

            <Typography variant="h6" className=" text-capitalize   d-block">
              {feed.subject}
            </Typography>
            <Typography variant="span" className=" text-black-50 my-2  d-block">
              {feed.feedback}
            </Typography>

            <hr />

            <div className="d-flex   my-1">
              <div className=" mr-auto">
                {feed?.replied === "1" ? (
                  <p
                    className=" shadow-sm p-1 px-4"
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
              </div>{" "}
              <Chip
                className="ml-auto"
                color="error"
                label={feed.update_at}
                variant="outlined"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
