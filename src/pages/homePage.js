import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import MainTitle from "../components/MainTitle/MainTitle";
import { Grid, makeStyles, Container } from "@material-ui/core";
import Img from "gatsby-image";
import styled from "styled-components";
import gsap from "gsap";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
  },
  grid: {
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      justifyItems: "center",
    },
  },
  gridContent: {
    height: "90vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));

const Image = styled(Img)`
  width: 625px;

  @media (max-width: 1400px) {
    width: 325px;
  }
  @media (max-width: 600px) {
    width: 250px;
  }
`;

const Line = styled.hr`
  border: 5px solid #632efa;
  margin: 0;
  @media (max-width: 1400px) {
    width: 325px;
    top: -10px;
    border: 4px solid #632efa;
  }
  @media (max-width: 600px) {
    width: 250px;
  }
`;

const Scroll = styled.div`
  bottom: 10px;
  width: 30px;
  height: 50px;
  border: 3px solid #632efa;
  border-radius: 60px;
  position: relative;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;

    @keyframes wheel {
      to {
        opacity: 0;
        top: 40px;
      }
    }
  }
`;

const HomePage = () => {
  const line = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      line.current,
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
      }
    );

    gsap.fromTo(
      image.current,
      {
        opacity: 0,
        y: 500,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 1.5,
        y: 0,
      }
    );
  });

  const query = useStaticQuery(graphql`
    {
      file(name: { eq: "me" }) {
        childImageSharp {
          fluid(maxWidth: 625, maxHeight: 513) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const classes = useStyles();
  return (
    <Container
      id="home"
      disableGutters
      maxWidth={false}
      className={classes.container}
    >
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            justify="flex-end"
            alignContent="center"
            className={classes.gridContent}
          >
            <Grid item>
              <MainTitle />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Parallax y={[40, -40]}>
            <Grid
              container
              justify="center"
              direction="column"
              alignContent="center"
              className={classes.gridContent}
            >
              <Grid style={{ overflow: "hidden" }}>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  ref={image}
                >
                  <Image fluid={query.file.childImageSharp.fluid} />
                </Grid>

                <Line ref={line} />
              </Grid>
            </Grid>
          </Parallax>
        </Grid>
        <Grid
          item
          style={{
            display: "grid ",
            alignItems: "flex-end ",
          }}
        >
          <Scroll />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
