import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "../../components/landingPage/Header";
import Footer from "../../components/landingPage/Footer.js";
import GridContainer from "../../components/landingPage/GridContainer.js";
import GridItem from "../../components/landingPage/GridItem.js";
import Button from "../../components/landingPage/Button";
import HeaderLinks from "../../components/landingPage/HeaderLinks.js";
import Parallax from "../../components/landingPage/Parallax.js";

import styles from "../../assets/material-kit-react/views/landingPage";

// Sections for this page
import ProductSection from "./Sections/productSection";
import TeamSection from "./Sections/teamSection.js";
import WorkSection from "./Sections/workSection.js";
import { CssBaseline } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <CssBaseline />
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand="SAVERSCARD"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/cool-background.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1>A SMARTER WAY TO SAVE</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="success"
                size="lg"
                component={RouterLink}
                to="/signup"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                JOIN US FOR FREE
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
