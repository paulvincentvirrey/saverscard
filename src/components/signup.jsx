import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  CssBaseline,
  Typography,
  Grid,
  Container
} from "@material-ui/core";
import Header from "./landingPage/Header";
import HeaderLinks from "./landingPage/HeaderLinks";
import SignupVendor from "./forms/signupVendor";
import SignupUser from "./forms/signupUser";
import { Elements, StripeProvider } from "react-stripe-elements";
import desktopImage from "../assets/img/cool-background.png";
import mobileImage from "../assets/img/signup.png";

const dashboardRoutes = [];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(15, 2),
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  container: {
    marginTop: theme.spacing(-8),
    height: "100vh"
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
        opacity: 0.8
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
    opacity: 0.8,
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
    title: "SIGN UP AS A USER",
    width: "100%",
    route: "/user/signup",
    component: "SignUpUser"
  },
  {
    title: "SIGN UP AS A VENDOR",
    width: "100%",
    route: "/vendor/signup",
    component: "SignUpVendor"
  }
];

const SignUp = props => {
  const classes = useStyles();
  const [signup, setSignup] = React.useState(<div />);
  const [isSigningUp, setIsSigningUp] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bgImage = windowWidth >= 650 ? desktopImage : mobileImage;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  function handleClick(component) {
    if (component === "SignUpUser")
      setSignup(
        <StripeProvider apiKey="pk_test_Ih8MSCvjVAgK6MgbFpo6YBio00J7ekV285">
          <Elements>
            <SignupUser />
          </Elements>
        </StripeProvider>
      );
    else
      setSignup(
        <StripeProvider apiKey="pk_test_Ih8MSCvjVAgK6MgbFpo6YBio00J7ekV285">
          <Elements>
            <SignupVendor />
          </Elements>
        </StripeProvider>
      );

    setIsSigningUp(!isSigningUp);
  }

  return (
    <CssBaseline>
      <Container
        maxWidth="md"
        className={classes.container}
        style={{
          backgroundImage: "url(" + bgImage + ")"
        }}
      >
        <Header
          color="dark"
          routes={dashboardRoutes}
          brand="SAVERSCARD"
          rightLinks={<HeaderLinks />}
          fixed
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={2}
        >
          {signup}
          {!isSigningUp &&
            images.map(image => (
              <Grid item xs={12} md={6} key={image.title}>
                <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                    width: image.width
                  }}
                  component={RouterLink}
                  to={image.route}
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
    </CssBaseline>
  );
};

export default SignUp;
