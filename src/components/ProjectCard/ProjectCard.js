import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import {
  useStyles,
  StyledText,
  StyledCardHeader,
  Scale,
} from "./ProjectCardStyled";
import Img from "gatsby-image";
import Button from "../Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";

const ProjectCard = ({
  title,
  image,
  text,
  description,
  live,
  code,
  techno,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Scale>
      <Card className={classes.root}>
        <StyledCardHeader title={title} className={classes.header} />
        <Img fluid={image} style={{ width: "100%", height: "350px" }} />
        <CardContent className={classes.cardContent}>
          <StyledText variant="body1">{text}</StyledText>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ fontSize: "30px" }} />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.cardContent}>
            {title !== "Portfolio" && (
              <Button color="primary" link={live} startIcon={<GitHubIcon />}>
                Live
              </Button>
            )}

            <Button color="secondary" link={code} startIcon={<CodeIcon />}>
              Code
            </Button>
          </CardContent>
          <CardContent className={classes.cardContent}>
            <StyledText paragraph>{description}</StyledText>
            <Accordion style={{ zIndex: 999 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StyledText className={classes.accordionHeading}>
                  Used Technologies
                </StyledText>
              </AccordionSummary>
              <AccordionDetails>
                <StyledText>{techno}</StyledText>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Collapse>
      </Card>
    </Scale>
  );
};

export default ProjectCard;
