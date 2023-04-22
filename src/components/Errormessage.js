import { Close } from "@mui/icons-material";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useState, useEffect } from "react";

const Errormessage = ({ message, error }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  return <div></div>;
};

export default Errormessage;
