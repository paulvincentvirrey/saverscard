import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Edit, Done } from "@material-ui/icons/";
const useStyles = makeStyles(theme => ({
  header: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
  }
}));

export default function AgreementForm(props) {
  const classes = useStyles();
  const { agreementCheck, esignature } = props.errors;
  const agreementCheckError = agreementCheck ? true : false;
  const esignatureError = esignature ? true : false;
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" className={classes.header}>
          TERMS AND AGREEMENT
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2">
            Subscription must be paid to activate the discount perks of card.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            Cardholder must present card at the time of purchase.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            Card is non-transferrable.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            For discount disputes, e-mail original receipt to
            saverscardllc@gmail.com with the short description of dispute.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            To cancel subscription, submit cancellation notice to
            saverscardllc@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Done />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            This agreement automatically renews for another year.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.values[props.name]}
                onChange={props.handleChange}
                value="agreementCheck"
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
