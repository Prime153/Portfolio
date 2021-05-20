import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { useStyles } from "./MainTitleStyled";
import Button from "../Button";
import { Parallax } from "react-scroll-parallax";
import gsap from "gsap";

const MainTitle = () => {
  const classes = useStyles();

  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
      }
    );
  });

  return (
    <Box className={classes.root} ref={ref}>
      <Parallax y={[-70, 70]}>
        <Typography variant="h4" className={classes.upperTitle}>
          hello there
          {/* -General Kenobi! */}
        </Typography>

        <Typography variant="h1" className={classes.mainTitle}>
          i am{" "}
          <Typography color="secondary" variant="inherit">
            j
          </Typography>
          acob
        </Typography>

        <Typography ariant="h3" className={classes.bottomTitle}>
          a frontend developer
        </Typography>
        <Grid container justify="space-evenly">
          <Grid item>
            <Button color="primary" link="#projects">
              see my work
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" download>
              download CV
            </Button>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};

export default MainTitle;
