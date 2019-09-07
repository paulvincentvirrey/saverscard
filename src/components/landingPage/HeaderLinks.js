/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link as RouterLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "../landingPage/Button.js";
import styles from "../../assets/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          component={RouterLink}
          to="/signin"
          color="transparent"
          className={classes.navLink}
        >
          <b>SIGN IN</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={RouterLink}
          to="/signup"
          color="transparent"
          className={classes.navLink}
        >
          <b>SIGN UP</b>
        </Button>
      </ListItem>
    </List>
  );
}
