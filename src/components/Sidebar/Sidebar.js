import React, { useEffect, useRef } from "react";
import {
  Typography,
  Drawer,
  useTheme,
  List,
  ListItem,
  Grid,
  Link,
} from "@material-ui/core";
import {
  useStyles,
  useStylesDrawer,
  Logo,
  StyledLink,
  StyledIconButton,
} from "./SidebarStyled";
import { graphql, useStaticQuery } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import gsap from "gsap";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SideBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        x: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  });

  const classes = useStyles();
  const drawerClasses = useStylesDrawer();
  const query = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 70) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root} ref={ref}>
        <div className={classes.grid}>
          <Link data-scroll href="#home">
            <Logo fluid={query.file.childImageSharp.fluid} />
          </Link>
        </div>
        <List>
          <ListItem className={classes.listItem}>
            <StyledLink underline="none" data-scroll href="#about">
              <Typography variant="inherit" color="secondary">
                .
              </Typography>
              about()
            </StyledLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <StyledLink underline="none" data-scroll href="#skills">
              <Typography variant="inherit" color="secondary">
                .
              </Typography>
              skills()
            </StyledLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <StyledLink underline="none" data-scroll href="#projects">
              <Typography variant="inherit" color="secondary">
                .
              </Typography>
              projects()
            </StyledLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <StyledLink underline="none" data-scroll href="#contact">
              <Typography variant="inherit" color="secondary">
                .
              </Typography>
              contact()
            </StyledLink>
          </ListItem>
        </List>
        <Grid
          container
          justify="space-evenly"
          alignContent="flex-end"
          style={{ height: "45vh" }}
        >
          <Grid item className={classes.iconContainer}>
            <StyledIconButton
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100006804726177"
            >
              <FacebookIcon />
            </StyledIconButton>
          </Grid>
          <Grid item className={classes.iconContainer}>
            <StyledIconButton
              target="_blank"
              href="https://www.linkedin.com/in/jakub-imio%C5%82czyk-779b68203/"
            >
              <LinkedInIcon />
            </StyledIconButton>
          </Grid>
          <Grid item className={classes.iconContainer}>
            <StyledIconButton
              target="_blank"
              href="https://github.com/Prime153"
            >
              <GitHubIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </div>

      {/* Hamburger Menu */}
      <div className={drawerClasses.root}>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          className={drawerClasses.iconButton}
        >
          <MenuIcon className={drawerClasses.icon} />
        </IconButton>
        <Drawer
          open={open}
          classes={{
            paper: drawerClasses.drawerPaper,
          }}
        >
          <div className={drawerClasses.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon className={drawerClasses.iconArrow} />
              ) : (
                <ChevronRightIcon className={drawerClasses.iconArrow} />
              )}
            </IconButton>
          </div>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Link data-scroll href="#home">
                <Logo fluid={query.file.childImageSharp.fluid} ham />
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <StyledLink underline="none" data-scroll href="#about">
                <Typography variant="inherit" color="secondary">
                  .
                </Typography>
                about()
              </StyledLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <StyledLink underline="none" data-scroll href="#skills">
                <Typography variant="inherit" color="secondary">
                  .
                </Typography>
                skills()
              </StyledLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <StyledLink underline="none" data-scroll href="#projects">
                <Typography variant="inherit" color="secondary">
                  .
                </Typography>
                projects()
              </StyledLink>
            </ListItem>
            <ListItem className={classes.listItem}>
              <StyledLink underline="none" href="#contact">
                <Typography variant="inherit" color="secondary">
                  .
                </Typography>
                contact()
              </StyledLink>
            </ListItem>
          </List>
          <Grid
            container
            justify="space-evenly"
            alignContent="flex-end"
            style={{ height: "45vh" }}
          >
            <Grid item className={classes.iconContainer}>
              <StyledIconButton
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100006804726177"
              >
                <FacebookIcon />
              </StyledIconButton>
            </Grid>
            <Grid item className={classes.iconContainer}>
              <StyledIconButton
                target="_blank"
                href="https://www.linkedin.com/in/jakub-imio%C5%82czyk-779b68203/"
              >
                <LinkedInIcon />
              </StyledIconButton>
            </Grid>
            <Grid item className={classes.iconContainer}>
              <StyledIconButton
                target="_blank"
                href="https://github.com/Prime153"
              >
                <GitHubIcon />
              </StyledIconButton>
            </Grid>
          </Grid>
        </Drawer>
      </div>
    </>
  );
};

export default SideBar;
