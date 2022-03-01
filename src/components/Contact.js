import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";
import Particles from "react-particles-js";
import { Fade } from "react-reveal";


const useStyles = makeStyles((theme) => ({
  contactContainer: {
    height: "100vh",
    width: "100vw",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    zIndex: "999",
    width: "50vw",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  particlesCanvas: {
    position: "fixed",
    height: "100vh",
    opacity: "0.3",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={`${classes.typedContainer} fondoContact`}>
      <Grid container justify="center">
        <Box
          component="form"
          name="contact-form"
          method="POST"
          data-netlify="true"
          className={classes.form}
        >
          <Fade duration={1000}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <input type="hidden" name="form-name" value="contact-form" />
            <InputField
              fullWidth={true}
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              inputProps={{ className: classes.input }}
              required
            />
            <InputField
              fullWidth={true}
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
              required
            />
            <InputField
              fullWidth={true}
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
              required
            />
            <div data-netlify-recaptcha="true"></div>
            <Button
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Fade>
        </Box>
      </Grid>

      <Particles
          canvasClassName={classes.particlesCanvas}
          params={{
          "particles": {
              "number": {
                  "value": 300,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.02
              },
              "move": {
                  "random": true,
                  "speed": 1
              },
              "size": {
                  "value": 2
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.05
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }} />
    </Box>
  );
};

export default Contact;
