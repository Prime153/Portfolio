import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Grid, makeStyles } from "@material-ui/core";
import gsap, { Sine } from "gsap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Heading from "../components/Heading/Heading";
import ScrollTrigger from "gsap/ScrollTrigger";

const StyledImage = styled(Img)`
  width: 130px;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 80px;
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 999,
    display: "flex",
    minHeight: "100vh",
    paddingLeft: "8%",
    backgroundColor: "#252728",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    width: "90%",
    opacity: 0.3,
    padding: "20px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
      width: "100%",
    },
  },
}));

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/images/logos/" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  const items = useRef([]);
  const classes = useStyles();

  useEffect(() => {
    const randomX = random(1, 70);
    const randomY = random(1, 300);
    const randomTime = random(3, 10);
    const randomTime2 = random(5, 10);
    const randomAngle = random(-10, 5);

    const logos = gsap.utils.toArray(items.current);
    logos.forEach((logos) => {
      gsap.set(logos, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(logos, 1);
      moveY(logos, -1);
      rotate(logos, 1);
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      items.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: items.current,
        },
      }
    );

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),

        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }
  });

  return (
    <>
      <Heading>skills</Heading>
      <Container
        maxWidth={false}
        disableGutters
        id="skills"
        className={classes.container}
      >
        <Grid container alignContent="center" justify="center">
          {data.allFile.nodes.map((elem) => {
            const refArray = (element) => items.current.push(element);

            return (
              <Grid item key={elem.id} ref={refArray}>
                <StyledImage fluid={elem.childImageSharp.fluid} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
