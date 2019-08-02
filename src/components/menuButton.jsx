import React from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import { authenticationService } from "../services/authenticationService";
import { history } from "../helpers/history";

const useStyles = makeStyles({
  avatar: {
    width: 60,
    height: 60
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
        <Avatar className={classes.avatar} />
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
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Account Settings</MenuItem>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
