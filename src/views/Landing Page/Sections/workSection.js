import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/landingPage/GridContainer.js";
import GridItem from "../../../components/landingPage/GridItem.js";
import CustomInput from "../../../components/landingPage/CustomInput.js";
import Button from "../../../components/landingPage/Button";

import styles from "../../../assets/material-kit-react/views/landingPageSections/workStyle.js";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Container>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h3 className={classes.title}>WE WOULD LOVE TO HEAR FROM YOU!</h3>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>
                <Button color="success" href="carmelapatrice@gmail.com">
                  Email us!
                </Button>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
