import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { adminReducer } from "../reducers/Adminreducer";

export const CreateAdmincontext = createContext();

export const Globaladmin = () => {
  return useContext(CreateAdmincontext);
};

const Adminlogincontext = (prop) => {
  // checking local storage

  const checkLocal = () => {
    const local = localStorage.getItem("admin");
    if (local) {
      return local;
    } else {
      return null;
    }
  };

  const [loginload, setLoginload] = useState(false);
  const [drawload, setDrawload] = useState(false);
  const [adminerror, setAdminerror] = useState(false);
  const [verifiedusers, setVerifiedusers] = useState([]);

  const [hits, setHits] = useState([]);
  const [users, setUsers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [notification, setNotification] = useState([]);
  const [verifycount, setVerifycount] = useState([]);
  const [gendercount, setGendercount] = useState([]);
  const [usersnotes, setUsersnotes] = useState([]);
  const [deletedusers, setDeletedusers] = useState([]);
  const [unverifiedusers, setUnverifiedusers] = useState([]);

  const [admin, dispatch] = useReducer(adminReducer, {
    auth: checkLocal(),
  });

  return (
    <CreateAdmincontext.Provider
      value={{
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
        hits,
        setHits,
        verifiedusers,
        setVerifiedusers,
      }}
    >
      {prop.children}
    </CreateAdmincontext.Provider>
  );
};

export default Adminlogincontext;
