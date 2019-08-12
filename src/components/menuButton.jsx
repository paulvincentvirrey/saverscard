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

const MenuButton = ({ name, loginType, handleLogout }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function renderMenu() {
    if (loginType === "user") {
      return "/account";
    }

    return "/account-v";
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
        <MenuItem disabled>{"Welcome, " + name + "!"}</MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to={renderMenu()}
        >
          My Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
