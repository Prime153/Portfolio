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
      image: query.allFile.nodes[4].childImageSharp.fluid,
      title: "Reptile Planet",
      text: "Pet shop with wide range of exotic species",
      description:
        "This project was created for two reasons - the desire to learn more about React Redux and the combination of my main interests. The website layout was designed by me in Figma. All product data and the shopping cart itself have been embedded in the Redux state. This way you can easily manage your data from anywhere in the application. When placing an order, you can check the current weather in the location specified by the user via the OpenWeatherMap API.",
      live: "https://prime153.github.io/Reptile-Planet/#/",
      code: "https://github.com/Prime153/Reptile-Planet",
      techno:
        "React, Router, Redux, Styled Components, React Icons, React Simple Image Slider, Formik, OpenWeatherMap API ",
    },
    {
      id: 2,
      image: query.allFile.nodes[3].childImageSharp.fluid,
      title: "Solar System ",
      text: "One page scroll website for solar energy company ",
      description:
        "My first React project. This is a website for a solar energy company. The website was created in the One Page Scroll Site convention. The React Router Hash Links library was used here to support smooth traffic between subpages. In the Calculator subpage, I implemented a simple calculator that calculates how many kW should be installed to reduce the monthly cost of electricity given by the user. AOS Animations Library was used for the scrolling animation.",
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
        "A simple application made in React. It uses the Beautiful DnD Library to smoothly move cards. When creating a new card, the user can specify a priority.",
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
        "It is a simple pure JavaScript game. It was created in order to practice my skill in this language. The user has to hit the cursor with the hamsters that appear from time to time. The game is over when the user reaches the allotted number of points or loses all lives. Before starting the game, you can choose the difficulty level. The game creates data as you select a level. ",
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
        "My first project in Gatsby.js. The GSAP library for animation has been implemented here. I also used the CSS framework, Material UI. On the contact page, I used the EmailJS API to send an e-mail to my account. For the images on the page, the Gatsby-image plugin was used.",
      code: "https://github.com/Prime153/Portfolio",
      techno:
        "Gatsby,Graphql,Gatsby Image, GSAP, Formik, React Parallax library, Material UI, Styled Components, EmailJs API",
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
