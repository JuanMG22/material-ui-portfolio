import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { Fade } from "react-reveal";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: "1rem 0.5rem 0 0.5rem",
    color: "tan",
    borderColor: "tan",
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const goProjects = () => navigate("/projects");
  const goContact = () => navigate("/contact");

  return (
    <Box className={classes.typedContainer} >
      <Fade duration={1000}>
      
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Juan Manuel González" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Juan González"]} typeSpeed={40} startDelay={300}/>
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "JavaScript Developer",
            "React Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          startDelay={300}
          loop
        />
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button 
        className={classes.button}
        variant="outlined"
        onClick={goProjects}
        >
          Projects
        </Button>
        <Button 
        className={classes.button}
        variant="outlined"
        onClick={goContact}
        >
          Contact
        </Button>
      </Box>
      </Fade>
    </Box>
  );
};

export default Header;
