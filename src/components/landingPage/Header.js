import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../../assets/material-kit-react/components/headerStyle.js";
// react components for routing our app without refresh
import { Link as RouterLink } from "react-router-dom";
import { authenticationService } from "../../services/authenticationService";
import { history } from "../../helpers/history";

const useStyles = makeStyles(styles);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      loginType: "user",
      isAdmin: false,
      color: "",
      routes: "",
      brand: "",
      rightLinks: "",
      fixed: true
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => {
      this.setState({
        currentUser: x !== null ? x.account : null,
        isAdmin: x !== null ? x.account.isAdmin : false,
        loginType: x !== null ? x.loginType : "user",
        color: this.props.color,
        routes: this.props.routes,
        brand: this.props.brand,
        rightLinks: this.props.rightLinks,
        fixed: this.props.fixed
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
      <HeaderNav
        currentUser={this.state.currentUser}
        loginType={this.state.loginType}
        isAdmin={this.state.isAdmin}
        handleLogout={this.handleLogout}
        color={this.state.color}
        routes={this.state.routes}
        brand={this.state.brand}
        rightLinks={this.state.rightLinks}
        fixed={this.state.fixed}
      />
    );
  }
}

function HeaderNav(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const {
    color,
    rightLinks,
    routes,
    leftLinks,
    brand,
    fixed,
    absolute,
    currentUser
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = (
    <Button
      component={RouterLink}
      to={currentUser ? "/vendors" : "/"}
      className={classes.title}
    >
      <b>{brand}</b>
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "black"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default Header;
