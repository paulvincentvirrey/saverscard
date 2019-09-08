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
  ListItemIcon,
  ListItemText,
  Link
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu as MenuIcon,
  Store as StoreIcon,
  People as PeopleIcon
} from "@material-ui/icons/";
import { authenticationService } from "../services/authenticationService";
import { history } from "../helpers/history";
import Menu from "./menuButton";

const drawerWidth = "60%";

const useStyles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#293039",
    zIndex: theme.zIndex.drawer + 1
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
  },
  drawerPaperAdmin: {
    width: 250
  },
  icon: {
    color: "#293039",
    fontSize: "2rem"
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      loginType: "user",
      isAdmin: false,
      mobileOpen: false
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

  handleSideNav = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  };

  showSideNav() {
    const { container, classes } = this.props;
    const { mobileOpen, isAdmin, currentUser } = this.state;

    const adminContent = (
      <React.Fragment>
        <div className={classes.toolbar} />
        <Divider style={{ marginBottom: 10 }} />
        <List>
          <ListItem
            button
            key="Vendors"
            component={RouterLink}
            to="/v/admin"
            className={classes.adminSideNav}
          >
            <ListItemIcon>
              <StoreIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Vendors" />
          </ListItem>
          <ListItem button key="Users" component={RouterLink} to="/u/admin">
            <ListItemIcon>
              <PeopleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </React.Fragment>
    );

    // if (!currentUser) {
    //   return (
    //     <Hidden lgUp>
    //       <Drawer
    //         container={container}
    //         variant="temporary"
    //         anchor="left" //{theme.direction === "rtl" ? "right" : "left"}
    //         open={mobileOpen}
    //         onClose={this.handleSideNav}
    //         classes={{
    //           paper: classes.drawerPaper
    //         }}
    //         ModalProps={{
    //           keepMounted: true // Better open performance on mobile.
    //         }}
    //       >
    //         <Typography component="h1" variant="h5" className={classes.appName}>
    //           <Link component={RouterLink} variant="h5" to="/vendors">
    //             Saverscard
    //           </Link>
    //         </Typography>

    //         <Divider />
    //         <List>
    //           {["Home", "Services", "About", "Contact Us"].map(
    //             (text, index) => (
    //               <ListItem button key={text}>
    //                 <ListItemText primary={text} />
    //               </ListItem>
    //             )
    //           )}
    //         </List>
    //       </Drawer>
    //     </Hidden>
    //   );
    // } else if (isAdmin) {
    return (
      <React.Fragment>
        <Hidden lgUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor="left" //{theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={this.handleSideNav}
            classes={{
              paper: classes.drawerPaperAdmin
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {adminContent}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: classes.drawerPaperAdmin
            }}
            variant="permanent"
            open
          >
            {adminContent}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }

  render() {
    const { container, classes } = this.props;
    const { mobileOpen, currentUser, loginType, isAdmin } = this.state;
    let displayName;
    if (currentUser) {
      displayName = currentUser.businessName
        ? currentUser.businessName
        : currentUser.firstName + " " + currentUser.lastName;
    }
    const sideNav = this.showSideNav();

    const navbar = currentUser && (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Container>
            <Toolbar>
              {/* {(!currentUser || isAdmin) && ( */}
              {isAdmin && (
                <Hidden lgUp>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={this.handleSideNav}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              )}

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
              {currentUser && (
                <Menu
                  name={displayName}
                  loginType={loginType}
                  handleLogout={this.handleLogout}
                />
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <nav>{sideNav}</nav>
      </div>
    );

    return <React.Fragment>{navbar}</React.Fragment>;
  }
}

export default withStyles(useStyles)(NavBar);
