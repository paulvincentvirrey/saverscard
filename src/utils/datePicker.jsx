import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export function MaterialUIPickers(props) {
  console.log(props.value);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        id="mui-pickers-date"
        label="Birthdate"
        name="birthdate"
        format="MM/dd/yyyy"
        inputVariant="outlined"
        InputAdornmentProps={{ position: "start" }}
        value={props.value}
        onChange={props.handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
