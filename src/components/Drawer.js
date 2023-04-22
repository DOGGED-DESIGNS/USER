import { useState } from "react";
import { Drawer } from "@mui/material";

const Drawerz = () => {
  const [anch, setAnch] = useState({
    postion: "left",
    status: true,
  });

  const onClose = () => {
    setAnch({ ...anch, status: false });
  };

  return (
    <>
      <Drawer anchor={anch.postion} open={anch.status} onClose={onClose}>
        this is jus the ultimate test bro
      </Drawer>
    </>
  );
};

export default Drawerz;
