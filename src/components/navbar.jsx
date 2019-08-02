import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Link,
  makeStyles,
  useTheme
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Role } from "../helpers/role";
import { authenticationService } from "../services/authenticationService";
import { history } from "../helpers/history";
import Menu from "./menuButton";
import logo from "../img/logo.png";
import avatar from "../img/gray.jpg";

const drawerWidth = "60%";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#293039"
  },
  appLogo: {
    maxHeight: 90,
    margin: "auto",
    marginTop: 5,
    marginBottom: 5
  },
  appName: {
    padding: theme.spacing(2)
  },
  avatar: {
    height: 120,
    width: 120
  },
  profile: {
    height: "60%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "absolute"
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
});

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
      mobileOpen: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
      })
    );
  }

  logout() {
    console.log("LOG OUT!");
    authenticationService.logout();
    history.push("/");
  }

  handleSideNav = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  };

  render() {
    const { container, classes } = this.props;
    const { mobileOpen, currentUser, isAdmin } = this.state;
    let userFunction;

    if (currentUser) {
      userFunction = (
        <div className={classes.user}>
          <Menu />
        </div>
      );
    }
    //  else {
    //   userFunction = (
    //     <div className={classes.user}>
    //       <Button component={RouterLink} to="/signin">
    //         Sign In
    //       </Button>
    //       <Button component={RouterLink} to="/signup">
    //         Sign Up
    //       </Button>
    //     </div>
    //   );
    // }

    const sideNav = (
      <div>
        {/* <div className={classes.toolbar} /> */}
        {!currentUser ? (
          <Typography component="h1" variant="h5" className={classes.appName}>
            Saverscard
          </Typography>
        ) : (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.profile}
          >
            {/* <div className=> */}
            <Avatar src={avatar} className={classes.avatar} />
            <Typography component="h1" variant="h5">
              Carmela Pare
            </Typography>
            <Typography component="h6" variant="h6">
              carmelapare@gmail.com
            </Typography>
            {/* </div> */}
          </Grid>
        )}

        <Divider />
        <List>
          {["Home", "Services", "About", "Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/* {!currentUser && (
          <React.Fragment>
            <Divider />
            <List>
              {["Sign Up", "Sign In"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  component={RouterLink}
                  to={text === "Sign Up" ? "/signup" : "/signin"}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        )} */}
      </div>
    );

    const navbar = (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Container>
            <Toolbar>
              {/* <Hidden mdUp> */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={this.handleSideNav}
              >
                <MenuIcon />
              </IconButton>
              {/* </Hidden> */}
              <img src={logo} className={classes.appLogo} />
              {/* <Hidden smDown>
                <div className={classes.menu}>
                  <Button>Services</Button>
                  <Button>About</Button>
                  <Button>Contact Us</Button>
                </div> */}
              <Hidden mdDown>{userFunction}</Hidden>

              {/* </Hidden> */}
            </Toolbar>
          </Container>
        </AppBar>
        <nav className={classes.sideNav} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden lgUp>
            <Drawer
              container={container}
              variant="temporary"
              anchor="left" //{theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={this.handleSideNav}
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

    if (!currentUser) {
      return <Hidden lgUp>{navbar}</Hidden>;
    }

    return <React.Fragment>{navbar}</React.Fragment>;
  }
}

export default withStyles(useStyles)(NavBar);
