import {
  Button,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
    width: "800px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "80% ",
    },
  },
  fieldsWrapper: {
    display: "grid",
    justifyContent: "center",
  },
  input: {
    width: "800px",
    margin: " 10px auto",
    color: "white",
    height: "85px",

    [theme.breakpoints.down("md")]: {
      width: "100% ",
    },
  },
  label: {
    fontSize: "20px",
    color: "white !important",
  },
  text: {
    fontSize: "30px",
    color: "white !important",
    lineHeight: 1.2,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
  },
  form: {
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
  },
}));

export const StyledButton = withStyles((theme) => ({
  root: {
    height: "50px",
    color: "white ",
    fontSize: "17px",
    fontWeight: "bold",
    width: "100%",
    margin: "10px 0",
  },
}))(Button);

export const StyledInput = withStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#632EFA",
      },
    },
  },
}))(TextField);

export const StyledHeading = withStyles((theme) => ({
  root: {
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
    },
  },
}))(Typography);
