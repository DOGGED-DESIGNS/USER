import { useState, useContext } from "react";
import axios from "axios";
import images from "../constants/image";
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
    await setLoadlogin(true);
    console.log(loadlogin);
    try {
      const data = await axios.post(
        `${images.url}/login.php`,
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
        await setErrorlogin(true);
        setLoadlogin(false);
        setErrormessage(data.data.message);
        console.log(errorlogin);
      } else {
        await setErrorlogin(false);
        setErrormessage("");
        dispatch({ type: "LOGIN", payload: data.data.token });

        console.log(login);
        console.log(data.data.message);
        console.log(data);
        localStorage.setItem("token", data.data.token);

        await setLoadlogin(false);
        console.log(loadlogin);
      }
    } catch (err) {}
  };

  return { loginUsers, errormessage, setErrormessage };
};

export default Loginhook;
