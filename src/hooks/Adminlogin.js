import { useState } from "react";

import Useallcontext from "./Useallcontext";
import image from "../constants/image";
import axios from "axios";
import { Globaladmin } from "../context/Adminlogincontext";

const Adminlogin = () => {
  const [loginmessage, setLoginmessage] = useState({});
  const {
    admin,
    setAdminerror,
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
  const [replymessage, setReplymessage] = useState({});

  const [forgotchange, setForgotchange] = useState({});

  const adminlogin = async (email, password) => {
    setLoginload(true);

    try {
      const data = await axios.post(
        `${image.url}/admin.php`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "LOGIN", payload: data.data.token });

      localStorage.setItem("admin", data.data.token);

      console.log(admin);
      console.log(data.data);

      setLoginload(false);
    } catch (err) {
      setLoginmessage(err.response.data);

      console.log(err.response.data);
      setLoginload(false);
    }
  };

  // reply
  const reply = async (id, uid, type, message) => {
    setLoginload(true);
    try {
      const data = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "replyfeedback",
          id: id,
          uid: uid,
          notificationz: message,
          type: type,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      setReplymessage(data.data);
      console.log(data.data);
      setLoginload(false);
    } catch (err) {
      setReplymessage(err.response.data);
      console.log(err?.response?.data);
      setLoginload(false);
    }
  };
  const deletefeed = async (id) => {
    setLoginload(true);
    try {
      const data = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "deletefeed",
          delete: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );
      if (data.data.error) {
        setReplymessage(data.data);
        setLoginload(false);
      } else {
        setReplymessage(data.data);
        setLoginload(false);
      }
    } catch (err) {}
  };

  // restore users;
  const restoreusers = async (id) => {
    setLoginload(true);
    try {
      const data = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "restoreusers",
          delete: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      setReplymessage(data.data);
      console.log(data.data);
      setLoginload(false);
    } catch (err) {
      setReplymessage(err.response.data);
      console.log(err?.response?.data);
      setLoginload(false);
    }
  };

  // delete users
  const deleteusers = async (id) => {
    setLoginload(true);
    try {
      const data = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "deleteusers",
          delete: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      setReplymessage(data.data);
      console.log(data.data);
      setLoginload(false);
    } catch (err) {
      setReplymessage(err.response.data);
      console.log(err?.response?.data);
      setLoginload(false);
    }
  };
  const confirmtoken = async (email, token) => {
    setLoginload(true);
    try {
      const data = await axios.get(`${image.url}/tokencheck.php`, {
        params: {
          email: email,
          token: token,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.data.error) {
        setReplymessage(data.data);
        setLoginload(false);
      } else {
        setReplymessage(data.data);
        console.log(data.data);
        setLoginload(false);
      }
    } catch (err) {}
  };
  const forgortpassword = async (email, password) => {
    setLoginload(true);
    try {
      const data = await axios.post(
        `${image.url}/resetpass.php`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.data.error) {
        setForgotchange(data.data);
        setLoginload(false);
      } else {
        setForgotchange(data.data);
        console.log(data.data);
        setLoginload(false);
      }
    } catch (err) {}
  };

  return {
    adminlogin,
    forgotchange,
    setForgotchange,
    restoreusers,
    deleteusers,
    deletefeed,
    reply,
    setLoginmessage,
    replymessage,
    confirmtoken,
    setReplymessage,
    loginmessage,
    forgortpassword,
  };
};

export default Adminlogin;
