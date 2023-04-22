import { createContext, useReducer, useState, useContext } from "react";

import { loginReducer } from "../reducers/loginreducer";

export const LoginCreate = createContext();

// check for localsoted token

//  use golobal context

export const Globalcontext = () => {
  return useContext(LoginCreate);
};

const Logincontext = (prop) => {
  const tokenCheck = () => {
    const tokenz = localStorage.getItem("token");
    if (tokenz) {
      return tokenz;
    } else {
      return null;
    }
  };

  const [errorlogin, setErrorlogin] = useState(false);
  const [loadlogin, setLoadlogin] = useState(false);
  // draw all load
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [admintext, setAdmintext] = useState("");

  const [admintitle, setAdmintitle] = useState("");

  const [drawload, setDrawload] = useState(true);
  const [notification, setNotification] = useState([]);
  const [note, setNote] = useState([]);
  const [users, setUsers] = useState([]);
  const [login, dispatch] = useReducer(loginReducer, {
    auth: { token: tokenCheck() },
    note: [],
    notification: [],
    users: {},
    single: {},
  });

  // filter the note

  const filterNote = (noteid) => {
    const filt = note.filter((no) => {
      if (no.id != noteid) {
        return no;
      }
    });
    setNote(filt);
  };

  // filter notification

  const filterNotification = (noteid) => {
    const filt = notification.filter((no) => {
      if (no.id != noteid) {
        return no;
      }
    });
    setNotification(filt);
  };

  return (
    <LoginCreate.Provider
      value={{
        login,
        text,
        admintitle,
        setAdmintitle,
        admintext,
        setAdmintext,
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
        filterNotification,
        note,
        setNote,
        filterNote,
      }}
    >
      {prop.children}
    </LoginCreate.Provider>
  );
};

export default Logincontext;
