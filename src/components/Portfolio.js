import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHub from "@material-ui/icons/GitHub";

import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import { Fade } from "react-reveal";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2.3rem auto",
  },
  iconBtn: {
    fontSize: "90%",
    marginRight: "0.3rem"
  },
  particlesCanvas: {
    position: "fixed",
    opacity: "0.5"
  },
}));

const projects = [
  {
    name: "Marty Friedman WebSite",
    description: `Musical artist WebSite Project in HTML, CSS, SASS, Bootstrap & Vanilla JS. Layout with CSS Gird, Flexbox & animations with AOS`,
    image: project1,
    code: "https://github.com/JuanMG22/Marty-Friedman-Website",
    demo: "https://juanmg22.github.io/Marty-Friedman-Website/",
    delay: 100
  },
  {
    name: "High Gaming E-commerce",
    description: `E-commerce Project in JavaScript, using Bootstrap, Sweet Alert2, jQuery, local storage for save the cart & more`,
    image: project2,
    code: "https://github.com/JuanMG22/High-Gaming",
    demo: "https://juanmg22.github.io/High-Gaming/",
    delay: 200
  },
  {
    name: "Sre Consulting and Devops",
    description: `Freelance Web page developed for a client that works as sre-devops. Private code`,
    image: project3,
    code: "https://github.com/xdie/webapp",
    demo: "https://sre.uy/SRE-website/",
    delay: 300
  },
  {
    name: "Guitar Shop React E-commerce",
    description: `E-commerce Project in React, using TailwindCSS, Sweet Alert2, useState, useEffect, ContextAPI, React Router Dom & more`,
    image: project4,
    code: "https://github.com/JuanMG22/guitar-shop",
    demo: "https://guitar-shop-react.netlify.app/",
    delay: 400
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={`${classes.typedContainer} fondoPortfolio`}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Fade duration={1000} delay={project.delay}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.code} target="_blank" rel="noopener noreferrer"  size="small" color="primary">
                  <GitHub className={classes.iconBtn} />
                  Code
                </Button>
                <Button href={project.demo} target="_blank"rel="noopener noreferrer" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            </Fade>
            <Particles
            canvasClassName={classes.particlesCanvas}
              params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
