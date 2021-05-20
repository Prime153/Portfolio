import React, { useState } from "react";
import {
  Button as MaterialButton,
  Select,
  ButtonGroup,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const StyledButton = withStyles((theme) => ({
  root: {
    fontSize: "18px",
    width: "190px",

    borderRadius: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  label: {
    textTransform: "capitalize",
  },
}))(MaterialButton);

const StyledSelect = withStyles((theme) => ({
  root: {
    color: "white",

    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}))(Select);

const StyledButtonGroup = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: "15px 0",
    },
  },
}))(ButtonGroup);

const StyledOption = styled.option`
  background-color: #632efa !important;
`;

const Button = ({ download, children, startIcon, link, color }) => {
  // cant use graphql variables cuz of static query
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/assets/files/" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const [value, setValue] = useState("pl");

  const handleChange = (e) => {
    e.target.value === "pl"
      ? setValue("pl")
      : e.target.value === "en" && setValue("en");
  };
  const { nodes } = data.allFile;

  return download ? (
    <>
      <StyledButtonGroup disableElevation>
        <StyledButton
          color={color}
          variant="contained"
          href={value === "pl" ? nodes[1].publicURL : nodes[0].publicURL}
          download={value === "pl" ? nodes[1].name : nodes[0].name}
          style={{ width: "150px" }}
        >
          {children}
        </StyledButton>
        {/* ripple error here cuz of included material ui select styling */}
        <StyledSelect
          value={value}
          color="primary"
          displayEmpty
          onChange={handleChange}
          variant="standard"
          style={{
            backgroundColor: "#632EFA",
            boxShadow:
              "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          <MenuItem value="pl">PL</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </StyledSelect>
      </StyledButtonGroup>
    </>
  ) : (
    <StyledButton
      href={link}
      startIcon={startIcon}
      variant="contained"
      color={color}
      data-scroll
      target="_blank"
    >
      {children}
    </StyledButton>
  );
};

export default Button;
