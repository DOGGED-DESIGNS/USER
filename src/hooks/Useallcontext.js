import { useContext } from "react";

import { LoginCreate } from "../context/logincontext";

const Useallcontext = () => {
  const {
    login,
    dispatch,
    loadlogin,
    setLoadlogin,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
    users,
    setUsers,
    notification,
    setNotification,
    note,
    setNote,
    text,
    setText,
    title,
    setTitle,
    setAdmintext,
    admintitle,
    admintext,
    setAdmintitle,
    filterNote,
  } = useContext(LoginCreate);

  return {
    login,
    admintitle,
    admintext,
    setAdmintitle,
    setAdmintext,
    text,
    setText,
    title,
    setTitle,
    dispatch,
    loadlogin,
    setLoadlogin,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
    users,
    setUsers,
    notification,
    setNotification,
    note,
    filterNote,
    setNote,
  };
};

export default Useallcontext;
