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

import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import { Fade } from "react-reveal";
import Particles from "react-particles-js";
import { Code, Link } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2.3rem auto",
    overflow: "hidden",
    transition: "ease all .3s"
  },
  iconBtn: {
    fontSize: "90%",
    marginRight: "0.3rem"
  },
  particlesCanvas: {
    position: "fixed",
    opacity: "0.5",
    height: "100vh"
  },
}));

const projects = [
  {
    name: "Marty Friedman WebSite",
    description: `Musical artist WebSite Project in React, SASS, React Router Dom, React Scroll & SEO with React Helmet. Layout with CSS Grid, Flexbox & animations with AOS`,
    image: project1,
    code: "https://github.com/JuanMG22/marty-friedman-website-react",
    demo: "https://marty-friedman.netlify.app/",
    delay: 150,
    id: 1
  },
  {
    name: "Guitar Shop React E-commerce",
    description: `E-commerce Project in React, using TailwindCSS, Sweet Alert2, useState, useEffect, ContextAPI, React Router Dom & more`,
    image: project2,
    code: "https://github.com/JuanMG22/guitar-shop",
    demo: "https://guitar-shop-react.netlify.app/",
    delay: 250,
    id: 2
  },
  {
    name: "High Gaming E-commerce",
    description: `E-commerce Project in JavaScript, using Bootstrap, Sweet Alert2, jQuery, local storage for save the cart & more`,
    image: project3,
    code: "https://github.com/JuanMG22/High-Gaming",
    demo: "https://juanmg22.github.io/High-Gaming/",
    delay: 350,
    id: 3
  },
  {
    name: "Notes App",
    description: `Notes App, full stack project. Frontend with React and TailwindCSS. Backend with Nodejs, Express and MongoDB database`,
    image: project4,
    code: "https://github.com/JuanMG22/notes-app-react",
    demo: "https://aplicacion-notas.netlify.app/",
    delay: 450,
    id: 4
  },
  {
    name: "Sre Consulting and Devops",
    description: `Freelance Web page developed for a client that works as sre-devops. Private code`,
    image: project5,
    code: "https://github.com/xdie/webapp",
    demo: "https://sre.uy",
    delay: 550,
    id: 5
  },
  {
    name: "Personal Portfolio",
    description: `Developer Portfolio Project in React, using Material UI, React Particles Js, React Reveal, React Router DOM & more`,
    image: project6,
    code: "https://github.com/JuanMG22/material-ui-portfolio",
    demo: "https://juangonzalez.netlify.app/",
    delay: 650,
    id: 6
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={`${classes.typedContainer} fondoPortfolio`}>
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
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={project.id}>
            <Fade duration={1000} delay={project.delay}>
            <Card className={`${classes.cardContainer} cardContainer`}>
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
                  <Code className={classes.iconBtn} />
                  Code
                </Button>
                <Button href={project.demo} target="_blank"rel="noopener noreferrer" size="small" color="primary">
                  <Link className={classes.iconBtn} />
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
