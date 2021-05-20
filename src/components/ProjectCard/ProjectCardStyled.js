import { Typography, CardHeader } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "10px",
    borderBottom: "8px solid #632EFA",
  },

  cardContent: {
    textAlign: "center",
  },

  expand: {
    color: "black",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Scale = styled.div`
  transition: 0.3s ease-in-out;
  box-shadow: inset 0px 0px 15px 0px rgba(99, 46, 250, 0.49);

  :hover {
    transform: scale(1.04);
  }
`;

export const StyledText = withStyles((theme) => ({
  root: {
    color: "black",
    fontSize: "25px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
}))(Typography);

export const StyledCardHeader = withStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
  },
}))(CardHeader);
