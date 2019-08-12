import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Link
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { authenticationService } from "../services/authenticationService";
import { history } from "../helpers/history";
import Menu from "./menuButton";

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
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
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
    authenticationService.currentUser.subscribe(x => {
      if (x) {
        this.setState({
          currentUser: x.account,
          isAdmin: x.account.isAdmin
        });
      }
    });
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

  showSideNavContent() {
    const { classes } = this.props;
    const { isAdmin } = this.state;

    if (isAdmin) {
      return (
        <div>
          <Typography component="h1" variant="h5" className={classes.appName}>
            <Link component={RouterLink} variant="h5" to="/vendors">
              Saverscard
            </Link>
          </Typography>

          <Divider />
          <List>
            <ListItem button key="Vendors">
              <ListItemText primary="Vendors" />
            </ListItem>
            <ListItem button key="Users">
              <ListItemText primary="Users" />
            </ListItem>
            {/* {["Home", "Services", "About", "Contact Us"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </List>
        </div>
      );
    }

    return (
      <div>
        <Typography component="h1" variant="h5" className={classes.appName}>
          <Link component={RouterLink} variant="h5" to="/vendors">
            Saverscard
          </Link>
        </Typography>

        <Divider />
        <List>
          {["Home", "Services", "About", "Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }

  render() {
    const { container, classes } = this.props;
    const { mobileOpen, currentUser, isAdmin } = this.state;
    let displayName;
    if (currentUser) {
      displayName = currentUser.businessName
        ? currentUser.businessName
        : currentUser.firstName + " " + currentUser.lastName;
    }
    const sideNav = this.showSideNavContent();

    const navbar = (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Container>
            <Toolbar>
              <Hidden lgUp>
                {(!currentUser || currentUser.isAdmin) && (
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={this.handleSideNav}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Hidden>
              <Typography
                className={classes.title}
                variant="h6"
                component={RouterLink}
                to="/vendors"
              >
                {/* <Link component={RouterLink} to="/vendors"> */}
                Saverscard
                {/* </Link> */}
              </Typography>
              {currentUser && <Menu name={displayName} />}
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
              {(!currentUser || currentUser.isAdmin) && sideNav}
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
