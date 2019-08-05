import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  Paper,
  Typography,
  Grid,
  Container,
  Link
} from "@material-ui/core";
import SignupVendor from "./signupForms/signupVendor";
import SignupUser from "./signupForms/signupUser";
import userIcon from "../img/header-bg.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

const images = [
  {
    url: "../img/header-bg.jpg",
    title: "Sign Up as a User",
    width: "100%",
    component: "SignUpUser"
  },
  {
    url: "../img/vendor-icon.jpg",
    title: "Sign Up as a Vendor",
    width: "100%",
    component: "SignUpVendor"
  }
];

const SignUp = () => {
  const classes = useStyles();
  const [signup, setSignup] = React.useState(<div />);
  const [isSigningUp, setIsSigningUp] = React.useState(false);

  function handleClick(component) {
    if (component === "SignUpUser") setSignup(<SignupUser />);
    else setSignup(<SignupVendor />);

    setIsSigningUp(!isSigningUp);
  }

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.root}
        spacing={2}
      >
        {signup}
        {!isSigningUp &&
          images.map(image => (
            <Grid item xs={12} key={image.title}>
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
                component={Button}
                onClick={() => handleClick(image.component)}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default SignUp;
