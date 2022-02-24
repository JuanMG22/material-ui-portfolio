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
    opacity: "0.3"
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Fade duration={1000} delay={500}>

        <iframe className="cv" title="My CV" src="http://docs.google.com/gview?url=https://juanmg22.github.io/material-ui-portfolio/src/CV-Juan%20Manuel%20%20Gonz%C3%A1lez.pdf
        &embedded=true" ></iframe>
        </Fade>
      </Box>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 6,
                size_min: 0,
                sync: true,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      >
      </Particles>
    </>
  );
};

export default Resume;
