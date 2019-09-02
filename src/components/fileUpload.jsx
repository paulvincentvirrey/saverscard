import React, { Component } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import { Clear as ClearButton } from "@material-ui/icons";

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      fileName: null
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
        fileName: file.name,
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
      fileName: null,
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
    return (
      <React.Fragment>
        <Grid item>{this.state.fileName}</Grid>
        <Grid item>
          <IconButton onClick={this.handleDelete}>
            <ClearButton />
          </IconButton>
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Grid container alignItems="center" justify="flex-start" spacing={2}>
        <Grid item>
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              style={{ display: "none" }}
              accept="application/pdf"
              onChange={this.handleUpload}
            />
          </Button>
        </Grid>
        {this.state.fileName ? this.displayUploadedFile() : ""}
      </Grid>
    );
  }
}

export default FileUpload;
