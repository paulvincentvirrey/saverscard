import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Edit } from "@material-ui/icons/";
const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    fontSize: "28px"
  }
}));

export default function AgreementForm(props) {
  const classes = useStyles();
  const { agreementCheck, esignature } = props.errors;
  const agreementCheckError = agreementCheck ? true : false;
  const esignatureError = esignature ? true : false;
  return (
    <React.Fragment>
      <Typography
        align="center"
        variant="h5"
        className={classes.header}
        color="primary"
      >
        TERMS AND AGREEMENT
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body2" align="justify">
            This agreement is being made with the VENDOR stated above and SAVERS
            CARD LLC for participation in the SAVERS CARD DISCOUNT PROGRAM. To
            preserve the Integrity of this discount program, the VENDOR agrees
            to ensure that all employees who come in contact with customers have
            full knowledge of the program and what the business will offer to
            card holders. The VENDOR agrees to participate and provide the
            SAVERS CARD LLC CARD MEMBERS with offer(s) stated above. Any
            disputes from transactions between the VENDOR and the CARD MEMBER
            shall be mitigated by both parties. This agreement is valid for a
            minimum membership of 1 year with automatic renewal.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.values[props.name]}
                onChange={props.handleChange}
                value="agreementCheck"
                color="primary"
              />
            }
            label="I understand and agree with the terms and conditions."
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={esignatureError}
            name="esignature"
            label="E-signature"
            helperText="Please enter your full name"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Edit />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
