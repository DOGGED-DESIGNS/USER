import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Forgot from "./pages/Fogot/Forgot";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import "./App.css";
import Side from "./components/Side/Side";
import Dashboard from "./components/Dashbooard/Dashboard";
import AdminNav from "./components/AdminNav/AdminNav";
import Notifications from "./components/Notifications/Notifications";
import Users from "./components/Users/Users";
import Notification from "./pages/Notification/Notification";
import Deleted from "./components/Deleted/Deleted";
import Feedback from "./components/Feedback/Feedback";
import Notez from "./components/Notez/Notez";
import { Globaladmin } from "./context/Adminlogincontext";
import Useallcontext from "./hooks/Useallcontext";
import Error from "./components/Error";
import Confirmtoken from "./pages/Confirmtoken/Confirmtoken";

const App = () => {
  const [toggle, setToggle] = useState({
    postion: "left",
    status: false,
  });

  // global admin

  const { admin, setAdminerror } = Globaladmin();

  const { login } = Useallcontext();

  const turnTrue = () => {
    setToggle({ ...toggle, status: true });
  };
  const turnFalse = () => {
    setToggle({ ...toggle, status: false });
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                login.auth.token ? (
                  <Navigate to={"/home"} />
                ) : (
                  <>
                    <Login />
                  </>
                )
              }
            />
            <Route
              path="signup"
              element={
                login.auth.token ? (
                  <Navigate to={"/home"} />
                ) : (
                  <>
                    <Signup />
                  </>
                )
              }
            />
            <Route
              path="forgot"
              element={
                login.auth.token ? (
                  <Navigate to={"/home"} />
                ) : (
                  <>
                    <Forgot />
                  </>
                )
              }
            />
            <Route
              path="home"
              element={
                login.auth.token ? (
                  <>
                    <Navbar />

                    <Home />
                  </>
                ) : (
                  <Login />
                )
              }
            />
            {/* confirm token */}

            <Route path="confirmtoken" element={<Confirmtoken />} />
            {/* end of confirm token */}
            <Route
              path="profile"
              element={
                login.auth.token ? (
                  <>
                    <Navbar />

                    <Profile />
                  </>
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="notification"
              element={
                login.auth.token ? (
                  <>
                    <Navbar />

                    <Notification />
                  </>
                ) : (
                  <Login />
                )
              }
            />
          </Route>

          <Route path="admin">
            <Route
              index
              element={
                admin.auth ? (
                  <Navigate to={"/admin/dashboard"} />
                ) : (
                  <>
                    <Admin />
                  </>
                )
              }
            />
            <Route
              path="dashboard"
              element={
                admin.auth ? (
                  <div className="d-flex" style={{ background: "whitesmoke" }}>
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="Dashboard"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Dashboard />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
            <Route
              path="users"
              element={
                admin.auth ? (
                  <div className="d-flex">
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="Users"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Users />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
            <Route
              path="notifications"
              element={
                admin.auth ? (
                  <div className="d-flex">
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="Notification"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Notifications />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
            <Route
              path="feedback"
              element={
                admin.auth ? (
                  <div className="d-flex">
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="Feedback"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Feedback />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
            <Route
              path="deleted"
              element={
                admin.auth ? (
                  <div className="d-flex">
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="Deleted Users"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Deleted />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
            <Route
              path="notes"
              element={
                admin.auth ? (
                  <div className="d-flex">
                    <div>
                      <Side turnFalse={turnFalse} toggle={toggle} />
                    </div>
                    <div className=" flex-grow-1">
                      <AdminNav
                        data="All Notes"
                        turnTrue={turnTrue}
                        toggle={toggle}
                      />
                      <Notez />
                    </div>
                  </div>
                ) : (
                  <Navigate to={"/admin"} />
                )
              }
            />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
