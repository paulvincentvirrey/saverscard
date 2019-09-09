import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/landingPage/GridContainer.js";
import GridItem from "../../../components/landingPage/GridItem.js";
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
              Please feel free to get in touch by sending as an e-mail by
              clicking the button below. We’d love to hear your thoughts and
              answer any questions you may have!
            </h4>
            <form>
              <Button
                className={classes.button}
                color="primary"
                href="mailto:saverscardllc@gmail.com?Subject=SaversCard%20Inquiry"
                target="_top"
              >
                Email us!
              </Button>
            </form>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
