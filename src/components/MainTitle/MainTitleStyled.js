import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "522px",
    textTransform: "uppercase",

    [theme.breakpoints.down("xs")]: {
      width: "328px",
      marginBottom: "5%",
    },
  },
  mainTitle: {
    fontWeight: "bold",
    margin: "-20px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "60px",
      margin: "-10px 0",
    },
  },
  upperTitle: {
    color: "#909090",
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
  },
  bottomTitle: {
    fontSize: "43px",
    color: "#909090",
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px",
    },
  },
}));
