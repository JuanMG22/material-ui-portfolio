import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Linkedin from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.linkedin.com/in/juan-manuel-gonz%C3%A1lez-041576218/" rel="noopener noreferrer" target="_blank">
        <BottomNavigationAction icon={<Linkedin />} className={classes.root} />
      </a>
      <a href="https://github.com/JuanMG22" rel="noopener noreferrer" target="_blank">
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </a>
      <a href="https://www.instagram.com/juan.m.gonzalez_/?hl=es-la" rel="noopener noreferrer" target="_blank">
        <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
