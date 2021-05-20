import React from "react";
import { Typography } from "@material-ui/core";
import { StyledHeading, StyledContainer } from "./HeadingStyled";
import { Parallax } from "react-scroll-parallax";

const Heading = ({ children }) => (
  <StyledContainer maxWidth={false}>
    <Parallax y={[70, -70]}>
      <StyledHeading variant="h1">
        <Typography variant="inherit" color="secondary">
          &lt;
        </Typography>
        {children}
        <Typography variant="inherit" color="secondary">
          &gt;
        </Typography>
      </StyledHeading>
    </Parallax>
  </StyledContainer>
);

export default Heading;
