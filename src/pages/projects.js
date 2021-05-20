import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/Heading/Heading";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: " 6% 0 0 8%",
    backgroundColor: "#252728",
    [theme.breakpoints.down("md")]: {
      padding: " 100px 0 0 0",
    },
  },
  cards: {
    width: "800px",
    margin: "20px",
  },
}));

const Projects = () => {
  const classes = useStyles();

  const query = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "assets/images/projects/" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  const data = [
    {
      id: 1,
      image: query.allFile.nodes[3].childImageSharp.fluid,
      title: "Reptile Planet",
      text: "Pet shop with wide range of exotic species",
      description:
        "This project was created for two reasons. I wanted to put together my main interests. Coding and passion to animals, and to improve my skills with React Redux. The whole data is located in redux state, so it’s very easy to manage it, from any part of the application. Items in basket are saved in local storage. When ordering, you can check the local weather conditions. I used OpenWeatherMap API for it. By going to subpages, you may notice some page flickering, it's beacause of scroll to top function. While browsing the store you may come across few pictures of my animals.",
      live: "https://prime153.github.io/Reptile-Planet/#/",
      code: "https://github.com/Prime153/Reptile-Planet",
      techno:
        "React, Router, Redux, Styled Components, React Icons, React Simple Image Slider, Formik, OpenWeatherMap API ",
    },
    {
      id: 2,
      image: query.allFile.nodes[4].childImageSharp.fluid,
      title: "Solar System ",
      text: "One page scroll website for solar energy company ",
      description:
        "This is my first project in React. This is one page scroll website using React Router hash links. I added smooth scroll library for cleaner surfing. In calculator page, you can calculate how many kW you need for your monthly energy consumption. AOS library was used for scroll animations.",
      live: "https://prime153.github.io/Solar-System-Website/",
      code: "https://github.com/Prime153/Solar-System-Website",
      techno: "React, Router, Styled Components, Formik, AOS Animation Library",
    },
    {
      id: 3,
      image: query.allFile.nodes[0].childImageSharp.fluid,
      title: "Kanban Board",
      text: "Kanban board build with DnD library",
      description:
        "This is very simple kanban board. I used Beautiful DnD library for it. User can choose the importance of the card, while adding new one.",
      live: "https://prime153.github.io/Kanban-Board/",
      code: "https://github.com/Prime153/Kanban-Board",
      techno: "React, Styled Components, Beautiful DnD Library",
    },

    {
      id: 4,
      image: query.allFile.nodes[2].childImageSharp.fluid,
      title: "Hamster Smasher",
      text: "Simple game build in vanilla JavaScript",
      description:
        "I wanted to improve my JavaScript skills, so I decided to make simple game. Player has to smash appearing hamsters. You are gaining points or loosing lifes, if you miss the hamster. I know, hitboxes are awful. Every hamster is going through some function (siting, smash event), when appropriate time is come. ",
      live: "https://prime153.github.io/Hamster-Smasher-Game/",
      code: "https://github.com/Prime153/Hamster-Smasher-Game",
      techno: "JavaSCript, HTML, CSS",
    },
    {
      id: 5,
      image: query.allFile.nodes[1].childImageSharp.fluid,
      title: "Portfolio",
      text: "Portfolio website",
      description:
        "My first project in Gatsby. Creating this website I was using new learned technology such as Material UI or GSAP. I took file data using Graphql.",
      code: "https://github.com/Prime153/Portfolio",
      techno:
        "Gatsby,Graphql,Gatsby Image, GSAP, Formik, React Parallax library, Material UI, Styled Components",
    },
  ];

  return (
    <>
      <Heading>projects</Heading>
      <Container
        maxWidth={false}
        id="projects"
        disableGutters
        className={classes.container}
      >
        <Grid container justify="center">
          {data.map((elem) => {
            return (
              <Grid item className={classes.cards} key={elem.title}>
                <ProjectCard
                  title={elem.title}
                  image={elem.image}
                  text={elem.text}
                  description={elem.description}
                  live={elem.live}
                  code={elem.code}
                  techno={elem.techno}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
