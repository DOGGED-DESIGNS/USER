import { useState, useContext } from "react";
import axios from "axios";
import { Globalcontext } from "../context/logincontext";
import { LoginCreate } from "../context/logincontext";
import Images from "../constants/image";
import Useallcontext from "./Useallcontext";

const Drawusers = () => {
  const {
    login,
    dispatch,
    loadlogin,
    setLoadlogin,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
    changes,
    users,
    setUsers,
    note,
    setNote,
    notification,
    setNotification,
  } = Useallcontext();

  //   draw notification, usersinfo, note

  const drawAll = async () => {
    setDrawload(true);
    console.log(loadlogin);

    try {
      const notification = await axios.post(
        `${Images.url}/proccess.php`,
        {
          message: "drawnotification",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );

      const usersinfo = await axios.post(
        `${Images.url}/proccess.php`,
        {
          message: "drawall",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );
      const drawnote = await axios.post(
        `${Images.url}/proccess.php`,
        {
          message: "drawnote",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );

      setNotification(notification.data);
      setNote(drawnote.data);
      setUsers(usersinfo.data);
      setDrawload(false);
    } catch (err) {}
  };

  //
  return { drawAll };
};

export default Drawusers;
