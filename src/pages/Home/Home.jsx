import { useContext, useEffect } from "react";

import "../../App.css";
import Datatable from "../../components/datatable/Datatable";
import { LoginCreate } from "../../context/logincontext";

import "./Home.scss";
import Drawusers from "../../hooks/Drawusers";
import { Globalcontext } from "../../context/logincontext";
import Useallcontext from "../../hooks/Useallcontext";
import { Skeleton } from "@mui/material";
import Drawer from "../../components/Drawer";
import Drawerz from "../../components/Drawer";

const Home = () => {
  const { drawAll } = Drawusers();

  const {
    login,
    dispatch,
    users,
    loadlogin,
    setLoadlogin,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
    changes,
    notification,
    note,
  } = Useallcontext();

  useEffect(() => {
    drawAll();
  }, []);

  return (
    <div className="home">
      {/* <Drawerz /> */}
      {/* <Navbar /> */}
      <Datatable />
    </div>
  );
};

export default Home;
