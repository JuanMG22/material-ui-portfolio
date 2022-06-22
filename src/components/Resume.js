import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Fade } from "react-reveal";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  particlesCanvas: {
    position: "fixed",
    opacity: "0.5",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Fade duration={500} delay={500}>
          <iframe
            className="cv"
            title="Juan Manuel Gonzalez CV"
            src="https://docs.google.com/viewer?srcid=1wuayb9Wt2hQQQkHxw0zYTTa6sk1cTrMh&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
          ></iframe>
        </Fade>
      </Box>
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
    </>
  );
};

export default Resume;
