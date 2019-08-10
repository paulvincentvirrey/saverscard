import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { authenticationService } from "../services/authenticationService";
import { history } from "../helpers/history";

const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
    color: "white"
  }
});

const MenuButton = ({ name }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function logout() {
    console.log("LOG OUT!");
    authenticationService.logout();
    history.push("/");
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircle className={classes.avatar} />
      </IconButton>
      <Menu
        id={name}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <MenuItem disabled>{"Hi, " + name + "!"}</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} component={RouterLink} to="/account">
          My Account
        </MenuItem>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
