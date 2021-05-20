import React, { useEffect, useRef } from "react";
import Heading from "../components/Heading/Heading";
import { Container, makeStyles } from "@material-ui/core";
import Form from "../components/Form/Form";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: " 6% 0 0 8%",
    backgroundColor: "#252728",
    display: "grid",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: " 100px 0 0 0",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const form = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      form.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: form.current,
        },
      }
    );
  });

  return (
    <>
      <Heading>contact</Heading>

      <Container
        id="contact"
        disableGutters
        maxWidth={false}
        className={classes.container}
      >
        <Form />
      </Container>
    </>
  );
};

export default Contact;
