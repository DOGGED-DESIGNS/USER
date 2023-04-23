import axios from "axios";
import { useState } from "react";
import { Globalcontext } from "../context/logincontext";
import Image from "../constants/image";

const Signupz = () => {
  const [errormessage, setErrormessage] = useState("");
  const [sentmessage, setSentmessage] = useState({});
  const [sentpass, setSentpass] = useState({});
  const [sentdelete, setSentdelete] = useState({});
  const [singlenote, setSinglenote] = useState({});
  const [drawtoupdate, setDrawtoupdate] = useState({});
  const [messagupdate, setMessagupdate] = useState({});

  const {
    login,
    dispatch,
    text,
    setText,
    setNote,
    title,
    setTitle,
    loadlogin,
    setLoadlogin,
    filterNote,
    filterNotification,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
  } = Globalcontext();

  const sign = async (name, password, email) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/signup.php`,
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.data.error) {
        setLoadlogin(false);
        setErrorlogin(true);
        setErrormessage(data.data.message);
      } else {
        dispatch({ type: "LOGIN", payload: data.data.token });
        localStorage.removeItem("token");
        localStorage.setItem("token", data.data.token);
        setLoadlogin(false);
      }
    } catch (err) {}
  };

  const verify = async (email) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/forget.php`,
        {
          email: email,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.data.error) {
        setLoadlogin(false);
        setErrorlogin(true);
        setSentmessage(data.data);
      } else {
        setLoadlogin(false);
        setErrorlogin(false);
        setSentmessage(data.data);
        console.log(data.data);
      }
    } catch (err) {}
  };

  // update
  const update = async (form) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(`${Image.url}/updateprofile.php`, form, {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.data.error) {
        setLoadlogin(false);
        setErrorlogin(true);
        setSentmessage(data.data);
      } else {
        setLoadlogin(false);
        setErrorlogin(false);
        setSentmessage(data.data);
      }
    } catch (err) {}
  };
  const changePass = async (email, oldpassword, newpassword) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/changepass.php`,
        {
          email: email,
          oldpassword: oldpassword,
          newpassword: newpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.data.error) {
        setLoadlogin(false);
        setErrorlogin(true);
        setSentpass(data.data);
      } else {
        setLoadlogin(false);
        setErrorlogin(false);
        setSentpass(data.data);
      }
    } catch (err) {}
  };

  // draw one note
  const drawone = async (noteid) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          noteid: noteid,
          message: "onenote",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );
      if (data.data.error) {
        setLoadlogin(true);
        console.log("there was an error");
      } else {
        setLoadlogin(false);
        setSinglenote(data.data);
        console.log(data.data);
      }
    } catch (err) {}
  };
  // delete one note
  const deleteone = async (noteid) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          noteid: noteid,
          message: "deleteone",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beare ${login.auth.token}`,
          },
        }
      );
      setLoadlogin(false);
      setSentdelete(data.data);
      console.log(data.data);
      filterNote(noteid);
    } catch (err) {
      setSentdelete(err.response.data);
    }
  };

  // deleteing notification
  const deletenotification = async (id) => {
    filterNotification(id);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          id: id,
          message: "deletenotification",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beare ${login.auth.token}`,
          },
        }
      );
    } catch (err) {
      console.log("there was an error");
    }
  };

  // this is the search hook
  const searchz = async (value) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          value: value,
          message: "search",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beare ${login.auth.token}`,
          },
        }
      );
      setLoadlogin(false);
      setNote(data?.data);
      console.log(data.data);
    } catch (err) {
      console.log("there was an error");
    }
  };
  // draw to update
  const drawto = async (noteid) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          noteid: noteid,
          message: "onenote",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );
      setLoadlogin(false);
      setDrawtoupdate(data.data);
      setTitle(data?.data?.title);
      setText(data?.data?.note);
      console.log(data.data);
    } catch (err) {
      setLoadlogin(true);
      console.log("there was an error");
    }
  };
  // update notes
  const updatenote = async (noteid, title, note) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          noteid: noteid,
          message: "updatenote",
          title: title,
          note: note,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login.auth.token}`,
          },
        }
      );
      setLoadlogin(false);
      setSentdelete(data?.data);
      console.log(data);
      console.log("i have been reached");
    } catch (err) {
      setLoadlogin(true);
      console.log("there was a massive error");
    }
  };
  // delete one note

  // post note

  const postnote = async (title, note) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          note: note,
          title: title,
          message: "postnote",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beare ${login.auth.token}`,
          },
        }
      );
      setLoadlogin(false);
      setSentdelete(data.data);
    } catch (err) {
      setSentdelete(err.response.data);
    }
  };
  const postfeedback = async (subject, feedback) => {
    setLoadlogin(true);
    try {
      const data = await axios.post(
        `${Image.url}/proccess.php`,
        {
          subject: subject,
          feedback: feedback,
          message: "postfeedback",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beare ${login.auth.token}`,
          },
        }
      );

      setLoadlogin(false);
      console.log(data.data);
      setSentdelete(data.data);
    } catch (err) {
      setSentdelete(err.response.data);
    }
  };

  return {
    errormessage,
    messagupdate,
    setMessagupdate,
    postfeedback,
    changePass,
    update,
    singlenote,
    postnote,
    sign,
    drawone,
    deleteone,
    drawto,
    drawtoupdate,
    setDrawtoupdate,
    deletenotification,
    verify,
    setSinglenote,
    sentmessage,
    searchz,
    setSentmessage,
    setSentpass,
    sentpass,
    updatenote,
    setSentdelete,
    sentdelete,
  };
};

export default Signupz;
