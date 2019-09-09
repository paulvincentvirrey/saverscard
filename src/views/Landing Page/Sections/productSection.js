import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import CheckCircle from "@material-ui/icons/CheckCircle";
// core components
import GridContainer from "../../../components/landingPage/GridContainer.js";
import GridItem from "../../../components/landingPage/GridItem.js";
import InfoArea from "../../../components/landingPage/InfoArea.js";

import styles from "../../../assets/material-kit-react/views/landingPageSections/productStyle";
import { Check } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2>LET{"'"}S TALK PRODUCT</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Be our customer"
              description="Register and be a SaversCard cardholder. Just present your card at any of our partner stores and enjoy your discount, hassle-free. "
              icon={ShoppingBasket}
              iconColor="primary"
              vertical
            />
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Partner with us"
              description="We help your business compete and increase profitability. When you agree to give our card holders a set amount of discount when they shop or avail services from your business, this increases revenue for your business.We are the most affordable advertising for your business, we guarantee instant customer base, and run your ad campaign including email advertising."
              icon={SupervisorAccount}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Join us now"
              description="SaversCard membership is only a few clicks away. Register now."
              icon={Check}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
