import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { Fade } from "react-reveal";

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
}));

const Header = () => {
  const classes = useStyles();

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
      </Fade>
    </Box>
  );
};

export default Header;
