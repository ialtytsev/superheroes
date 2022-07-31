import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import HeroLogo from "../../images/hero-logo.png";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img
          src={HeroLogo}
          alt="heroLogo"
          height="45px"
          className={classes.brandLogo}
        />
        <Typography variant="h2" align="center" className={classes.heading}>
          Superheroes
        </Typography>
      </Link>
    </AppBar>
  );
};

export default Navbar;
