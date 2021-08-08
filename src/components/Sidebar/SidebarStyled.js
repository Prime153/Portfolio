import { IconButton, makeStyles, withStyles } from "@material-ui/core";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
// Material UI links broke while deploying

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "150px",
    backgroundColor: "#252728",
    position: "fixed",
    zIndex: 99,
    boxShadow: " 16px 0px 20px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    textAlign: "center",
  },
  grid: {
    minHeight: "29vh",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
  },
  iconContainer: {
    width: "33%",
    color: "white",
  },
}));

const drawerWidth = 200;

export const useStylesDrawer = makeStyles((theme) => ({
  root: {
    zIndex: 99,
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "fixed",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },

  drawerPaper: {
    backgroundColor: "black",
    width: drawerWidth,

    textAlign: "center",
  },
  drawerHeader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconButton: {
    position: "relative",
    top: "10px",
    left: "20px",
    zIndex: 999,
    backgroundColor: "white",
    marginLeft: theme.spacing(2),
  },
  iconArrow: {
    color: "white",
    fontSize: "30px",
  },
  icon: {
    color: "black !important",
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Logo = styled(Img)`
  margin-top: 30px;
  z-index: 999;

  ${({ ham }) =>
    ham &&
    css`
      width: 140px;
      margin: 0 0 40px;
    `}
`;

export const StyledIconLinks = withStyles((theme) => ({
  root: {
    color: "white",
  },
}))(IconButton);

export const StyledLink = styled(Link)`
  transition: 0.2s;
  text-decoration: none;
  color: white;
  font-size: 24px;

  :hover {
    color: #632efa;
  }
`;
