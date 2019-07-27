import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SignupModal from "./signupModal";
import "../css/navbar.css";
import logo from "../img/logo.png";
import { makeStyles, useTheme } from "@material-ui/core";

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {};

//   componentDidMount() {
//     let sideNav = document.querySelectorAll(".sidenav");

//     let options = {
//       edge: "right"
//     };
//     M.Sidenav.init(sideNav, options);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="navbar-fixed">
//           <nav className="main-nav">
//             <div className="nav-wrapper">
//               <a href="/" className="brand-logo ">
//                 <img src={logo} />
//               </a>
//               <a
//                 href="#"
//                 data-target="mobile-nav"
//                 className="sidenav-trigger right"
//               >
//                 <i className="material-icons">menu</i>
//               </a>
//               <ul id="nav-mobile" className="right hide-on-med-and-down">
//                 <li>
//                   <a href="#services">Services</a>
//                 </li>
//                 <li>
//                   <a href="#about">About</a>
//                 </li>
//                 <li>
//                   <a href="#contact">Contact Us</a>
//                 </li>
//                 <div className="right">
//                   <li>
//                     <Link to="/signin">Sign In</Link>
//                   </li>
//                   <li>
//                     <SignupModal
//                       userRoute="/signUpUser"
//                       vendorRoute="/signUpVendor"
//                     />
//                   </li>
//                 </div>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <ul id="mobile-nav" className="sidenav right right-aligned">
//           <li>
//             <a href="#services">Services</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#contact">Contact Us</a>
//           </li>
//           <li>
//             <Link to="/signin">Sign In</Link>
//           </li>
//           <li>
//             <Link to="/signup">Sign Up</Link>
//           </li>
//         </ul>
//       </React.Fragment>
//     );
//   }
// }

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#293039"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#ffffff"
  },
  menuItem: {
    color: "#fffff2"
  },
  title: {
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
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp implementation="css">
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
          <Typography variant="h6" className={classes.title}>
            SaversCard
          </Typography>
          <Button color="#ffffff">Sign In</Button>
          <Button color="#ffffff">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.sideNav} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
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
        {/* <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {sideNav}
          </Drawer>
        </Hidden> */}
      </nav>
    </div>
  );
};

export default NavBar;
