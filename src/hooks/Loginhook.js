import { useState, useContext } from "react";
import axios from "axios";
import Images from "../constants/image";
import { Globalcontext } from "../context/logincontext";
const Loginhook = () => {
  // create usestate for data

  const [errormessage, setErrormessage] = useState("");

  const {
    login,
    dispatch,
    loadlogin,
    setLoadlogin,
    errorlogin,
    setErrorlogin,
    drawload,
    setDrawload,
  } = Globalcontext();

  const loginUsers = async (email, password) => {
    setLoadlogin(true);
    console.log(loadlogin);
    try {
      const data = await axios.post(
        `${Images.url}/login.php`,
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

      console.log(login);
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);

      setErrormessage("");
      setErrorlogin(false);
      setLoadlogin(false);
      console.log(loadlogin);
    } catch (err) {
      setLoadlogin(false);
      setErrorlogin(true);
      console.log(errorlogin);

      setErrormessage(err.response.data.message);
    }
  };

  return { loginUsers, errormessage };
};

export default Loginhook;
