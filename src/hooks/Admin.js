import { useState } from "react";

import Useallcontext from "./Useallcontext";
import axios from "axios";
import { Globaladmin } from "../context/Adminlogincontext";
import image from "../constants/image";

const Adminz = () => {
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
  // setlogin message;

  const admindraw = async () => {
    setDrawload(true);
    try {
      const hits = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "hits",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // admin notification
      const adminnotification = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "adminnotification",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // gender count
      const gender = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "gendercount",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      //  all users notes
      const usersnotes = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "usersnotes",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // number of verified users
      const verified = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "verified",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // all users
      const allusers = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "allusers",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // all feedback
      const allfeedback = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "allfeedback",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      // this is the verified count
      const verifiedcount = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "verifycount",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      const deleted = await axios.post(
        `${image.url}/adminpro.php`,
        {
          message: "deletedusers",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${admin.auth}`,
          },
        }
      );

      const vv = verifiedcount.data.map((t) => {
        return { name: t.verify, number: parseInt(t.number) };
      });
      const gg = gender.data.map((t) => {
        return { name: t.gender, number: parseInt(t.number) };
      });

      console.log(allfeedback.data);

      setUsers(allusers.data);
      setFeedback(allfeedback.data);
      setNotification(adminnotification.data);
      setGendercount(gg);
      setVerifiedusers(verified.data);
      setHits(hits.data);

      setVerifycount(vv);
      setDeletedusers(deleted.data);

      setUsersnotes(usersnotes.data);
      //
      setDrawload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { admindraw };
};

export default Adminz;
