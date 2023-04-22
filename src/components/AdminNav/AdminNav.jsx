import {
  DashboardOutlined,
  DataArraySharp,
  Login,
  Menu,
} from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import "../../App.css";

import { Globaladmin } from "../../context/Adminlogincontext";

const AdminNav = ({ data, turnTrue, toggle }) => {
  const { dispatch, admin } = Globaladmin();
  return (
    <nav className=" d-flex   p-3 shadow-sm bg-white">
      <div className=" mr-auto">
        {toggle ? (
          <IconButton
            onClick={() => {
              turnTrue();
              console.log(" i have been clicked");
            }}
          >
            <Menu />
          </IconButton>
        ) : (
          ""
        )}
      </div>
      <div className=" m-auto">
        <Typography
          variant="h5"
          className=" text-center  textcapitalize"
          sx={{ color: "#051E34" }}
        >
          <DashboardOutlined sx={{ color: "#051E34" }} /> {data}
        </Typography>
      </div>

      <div className=" ml-auto">
        <Button
          size="small"
          sx={{ color: "#051E34" }}
          variant="text"
          startIcon={<Login sx={{ color: "#051E34" }} />}
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default AdminNav;
