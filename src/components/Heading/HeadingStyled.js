import { Typography, withStyles, Container } from "@material-ui/core";

export const StyledHeading = withStyles((theme) => ({
  root: {
    fontWeight: "bold",
    fontSize: "90px",
    letterSpacing: "5px",
    opacity: 0.2,
    marginLeft: "10px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
}))(Typography);

export const StyledContainer = withStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    paddingTop: "60px",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}))(Container);
