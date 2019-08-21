import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, MobileStepper, Icon } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const appInfo = [
  {
    label: "Home",
    imgPath: window.location + "/img/home.png"
  },
  {
    label: "About Us",
    imgPath: window.location + "/img/about.png"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  img: {
    height: "100vh",
    display: "block",
    overflow: "hidden",
    width: "100%"
  },
  stepper: {
    justifyContent: "center"
  }
}));

const Carousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = appInfo.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {appInfo.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default Carousel;
