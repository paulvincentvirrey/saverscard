import React, { Component } from "react";
import { Box, Button, Grid, IconButton } from "@material-ui/core";
import {
  Clear as ClearButton,
  CloudUpload as CloudUploadIcon
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(2)
  }
});

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    };
  }

  handleUpload = event => {
    const { target } = event;
    const file = target.files[0];
    let newEvent = {};

    console.log(this.validateSize(event));
    if (this.validateSize(event)) {
      console.log(file);
      this.setState({
        selectedFile: file
      });

      newEvent = {
        target: {
          name: this.props.name,
          value: file
        }
      };

      this.props.handleChange(newEvent);
    }
  };

  handleDelete = () => {
    const newEvent = {
      target: {
        name: this.props.name,
        value: null
      }
    };
    this.setState({
      selectedFile: null
    });

    this.props.handleChange(newEvent);
  };

  validateSize = event => {
    let file = event.target.files[0];
    let size = 3000000;
    let err = "";
    console.log(file.size);
    if (file.size > size) {
      err = file.type + "is too large, please pick a smaller file\n";
      console.log(err);
      return false;
    }

    return true;
  };

  displayUploadedFile = () => {
    const { classes } = this.props;
    const name = this.state.selectedFile.name;
    const size = (this.state.selectedFile.size / 1000).toFixed(2);
    return (
      <React.Fragment>
        <Grid item xs={8}>
          {name + " "}|{" " + size + " KB"}
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={this.handleDelete} className={classes.rightIcon}>
            <ClearButton />
          </IconButton>
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Box border={1} borderColor="grey.500">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <IconButton
              variant="contained"
              component="label"
              className={classes.button}
            >
              <CloudUploadIcon />
              <input
                type="file"
                style={{ display: "none" }}
                accept="application/pdf"
                onChange={this.handleUpload}
              />
            </IconButton>
          </Grid>
          {this.state.selectedFile
            ? this.displayUploadedFile()
            : "Upload invoice"}
        </Grid>
      </Box>
    );
  }
}

export default withStyles(useStyles)(FileUpload);
