import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Field } from "formik";
import emailjs from "emailjs-com";
import { Box, Typography, Snackbar } from "@material-ui/core";
import AlertInfo from "../Alert";

import {
  useStyles,
  StyledButton,
  StyledInput,
  StyledHeading,
} from "./FormStyled";

const Form = () => {
  const classes = useStyles();

  const sendMail = (values) => {
    emailjs
      .send("gmail", "template_ii84utu", values, "user_bsmXr4cyFeluKCPOgRaPK")
      .then(
        () => {
          setOpen("success");
        },
        () => {
          setOpen("failed");
        }
      );
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open, setOpen] = useState(null);

  return (
    <Box className={classes.wrapper}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      >
        {open === "success" ? <AlertInfo status="success" /> : <AlertInfo />}
      </Snackbar>

      <StyledHeading variant="h1">
        Text
        <StyledHeading variant="inherit" style={{ color: "#632EFA" }}>
          Me!
        </StyledHeading>
      </StyledHeading>

      <Formik
        initialValues={{ name: "", email: "", textarea: "" }}
        onSubmit={(values) => {
          sendMail(values);
        }}
        validationSchema={yup.object({
          name: yup.string().required(),
          email: yup.string().required().email(),
          textarea: yup.string().required(),
        })}
      >
        {({ errors, handleSubmit, touched }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.fieldsWrapper}>
              <Field
                InputProps={{
                  classes: {
                    input: classes.text,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                }}
                className={classes.input}
                variant="outlined"
                as={StyledInput}
                name="name"
                label="Name"
                error={!!errors.name && !!touched.name && !!errors.name}
                helperText={
                  !!errors.name && !!touched.name && !!errors.name && "Required"
                }
              />

              <Field
                InputProps={{
                  classes: {
                    input: classes.text,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                }}
                placeholder="I have to response :)"
                className={classes.input}
                variant="outlined"
                as={StyledInput}
                name="email"
                label="Email"
                error={!!errors.email && !!touched.email && !!errors.email}
                helperText={
                  !!errors.email &&
                  !!touched.email &&
                  !!errors.email &&
                  "Invalid"
                }
              />

              <div>
                <Field
                  InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                    },
                  }}
                  className={classes.input}
                  variant="outlined"
                  multiline
                  style={{ height: "270px" }}
                  rows={6}
                  as={StyledInput}
                  name="textarea"
                  label="Message"
                  error={
                    !!errors.textarea && !!touched.textarea && !!errors.textarea
                  }
                  helperText={
                    !!errors.textarea &&
                    !!touched.textarea &&
                    !!errors.textarea &&
                    "Type something :)"
                  }
                />

                <StyledButton
                  type="submit"
                  style={{ backgroundColor: "#632EFA " }}
                >
                  Send
                </StyledButton>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    borderTop: "2px solid #632EFA",
                    borderBottom: "2px solid #632EFA",
                    padding: "10px",
                  }}
                >
                  <Typography variant="inherit" color="secondary">
                    &lt;{" "}
                  </Typography>
                  j.prime153@yahoo.com
                  <Typography variant="inherit" color="secondary">
                    {" "}
                    &gt;
                  </Typography>
                </Typography>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
