import {
  makeStyles,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import Heading from "../components/Heading/Heading";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0px -13px 39px -7px rgba(0,0,0,0.69)",
    minHeight: "100vh",
    paddingLeft: "8%",
    backgroundColor: "#252728",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {},
  },
  textContainer: {
    width: "800px",
    marginLeft: "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));

const StyledHeading = withStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
    },
  },
}))(Typography);

const StyledText = withStyles((theme) => ({
  root: {
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },
}))(Typography);

const Line = styled.hr`
  width: 50%;
  border: 3px solid #632efa;
  position: absolute;
  margin-top: 2%;
  overflow: hidden;
`;

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Heading>about</Heading>
      <Container
        maxWidth={false}
        disableGutters
        id="about"
        className={classes.container}
        style={{ overflow: "hidden" }}
      >
        <Parallax x={[-60, 60]}>
          <div className={classes.textContainer}>
            <StyledHeading variant="h1">
              About{" "}
              <Typography color="secondary" variant="inherit">
                Me
              </Typography>
            </StyledHeading>
            <StyledText variant="h6">
              I’m highly motivated guy who hates leave any loose ends. I’ve
              started my frontend journey since 2019. Since then, I spend every
              free moment to messing with the code and I really enjoy it. I
              create every layout by myself. I’m looking for some ideas on the
              internet, take my favourite parts and put it together in Figma.
              When I’m not coding or programming, you can find me somewhere
              between my lizards or tarantulas or just on the fields in
              Battlefield.
            </StyledText>

            <Line />
          </div>
        </Parallax>
      </Container>
    </>
  );
};

<></>;

export default About;
