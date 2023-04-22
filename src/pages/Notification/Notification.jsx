import { Close } from "@mui/icons-material";
import { Alert, Button, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import "../../App.css";

import Drawusers from "../../hooks/Drawusers";
import Useallcontext from "../../hooks/Useallcontext";
import Signupz from "../../hooks/Signup";

const Notification = () => {
  const { drawAll } = Drawusers();
  const { deletenotification } = Signupz();
  const { notification } = Useallcontext();

  useEffect(() => {
    drawAll();
    console.log(notification);
  }, []);

  return (
    <>
      {notification?.map((note) => {
        return (
          <div className=" container my-4">
            <div
              className=" m-auto notification shadow-sm p-3"
              style={{
                maxWidth: "500px",
                background: "whitesmoke",
                borderRadius: "7px",
                gap: "10px",
              }}
            >
              <div className=" d-flex">
                <div className="flex-grow-1">
                  <Typography
                    variant="h6"
                    className=" font-weight-bold text-info text-capitalize my d-block"
                  >
                    {note.type}
                  </Typography>

                  <Typography
                    variant="span"
                    className=" mt-2 text-black-50  d-block"
                  >
                    {note.message}
                  </Typography>
                </div>
                <div>
                  <IconButton
                    onClick={() => {
                      deletenotification(note.id);
                    }}
                  >
                    <Close fontSize="18px" />
                  </IconButton>
                </div>
              </div>
              <hr />
              <div className=" d-block">
                <Button
                  size="small"
                  className=" text-danger d-block ml-auto"
                  variant="text"
                >
                  {note.created_at}
                </Button>
              </div>
            </div>
            {/* <Alert
              className=" m-auto"
              sx={{
                maxWidth: "700px",
              }}
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    console.log("i have been clicked");
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
              }
              icon={false}
            >
              <Typography
                sx={{ flexGrow: "1" }}
                variant="h6"
                className=" flex-grow-1 text-capitalize my-2 d-block"
              >
                {note.type}
              </Typography>
              <Typography
                variant="span"
                className=" flex-grow-1 text-black-50   my-2 d-block"
              >
                {note.message}
              </Typography>
              <hr className="d-block" sx={{ width: "100%" }} />
              <div className=" flex-grow-1">
                <Button
                  disabled={true}
                  className=" d-block ml-auto"
                  variant="text"
                >
                  {note.created_at}
                </Button>
              </div>
            </Alert> */}
          </div>
        );
      })}
    </>
  );
};

export default Notification;
