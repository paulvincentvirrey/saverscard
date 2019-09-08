/*eslint-disable*/
import React, { Component } from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { authenticationService } from "../../services/authenticationService";
import { history } from "../../helpers/history";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, List, ListItem } from "@material-ui/core";

// @material-ui/icons
import { TableChart, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "../landingPage/CustomDropdown";
import styles from "../../assets/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

class HeaderLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      loginType: "user",
      isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => {
      this.setState({
        currentUser: x !== null ? x.account : null,
        isAdmin: x !== null ? x.account.isAdmin : false,
        loginType: x !== null ? x.loginType : "user"
      });
    });
  }

  handleLogout() {
    console.log("LOG OUT!");
    authenticationService.logout();
    history.push("/");
  }

  render() {
    return (
      <HeaderLink
        currentUser={this.state.currentUser}
        loginType={this.state.loginType}
        isAdmin={this.state.isAdmin}
        handleLogout={this.handleLogout}
      />
    );
  }
}

function HeaderLink(props) {
  const { currentUser, loginType, isAdmin, handleLogout } = props;
  const classes = useStyles();
  let displayName;
  let accountRoute;
  if (currentUser) {
    if (loginType === "user") {
      displayName = currentUser.firstName;
      accountRoute = "/account";
    } else {
      displayName = currentUser.businessName;
      accountRoute = "/account-v";
    }

    currentUser.firstName + " " + currentUser.lastName;
  }
  return (
    <List className={classes.list}>
      {isAdmin && (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Summary Tables"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={TableChart}
            dropdownList={[
              <Button
                to="/vendor/admin"
                component={Link}
                className={classes.dropdownLink}
              >
                Vendor Summary
              </Button>,
              <Button
                to="/user/admin"
                component={Link}
                className={classes.dropdownLink}
              >
                User Summary
              </Button>
            ]}
          />
        </ListItem>
      )}
      {currentUser && (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText={"Welcome, " + displayName + "!"}
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={AccountCircle}
            dropdownList={[
              <Button
                to={accountRoute}
                component={Link}
                className={classes.dropdownLink}
              >
                My Account
              </Button>,
              <Button onClick={handleLogout} className={classes.dropdownLink}>
                Sign Out
              </Button>
            ]}
          />
        </ListItem>
      )}
    </List>
  );
}

export default HeaderLinks;
