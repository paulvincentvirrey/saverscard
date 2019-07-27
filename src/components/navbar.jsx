import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Link,
  makeStyles,
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SignupModal from "./signupModal";
import "../css/navbar.css";
import logo from "../img/logo.png";

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#293039"
  },
  appLogo: {
    maxHeight: 90,
    margin: 5
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menu: {
    flexGrow: 1
  },
  sideNav: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
}));

const NavBar = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleSideNav = () => {
    setMobileOpen(!mobileOpen);
  };

  const sideNav = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Services", "About", "Contact Us"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sign Up", "Sign In"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={handleSideNav}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <img src={logo} className={classes.appLogo} />
            <Hidden smDown>
              <div className={classes.menu}>
                <Button>Services</Button>
                <Button>About</Button>
                <Button>Contact Us</Button>
              </div>
              <div className={classes.user}>
                <Button component={RouterLink} to="/signin">
                  Sign In
                </Button>
                <Button component={RouterLink} to="/signup">
                  Sign Up
                </Button>
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className={classes.sideNav} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor="left" //{theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleSideNav}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {sideNav}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;
