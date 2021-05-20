import React from "react";
import { Alert } from "@material-ui/lab";

const AlertInfo = ({ status }) => {
  return status === "success" ? (
    <Alert elevation={6} variant="filled" severity="success">
      Message has been sent!
    </Alert>
  ) : (
    <Alert elevation={6} variant="filled" severity="error">
      error :(
    </Alert>
  );
};

export default AlertInfo;
