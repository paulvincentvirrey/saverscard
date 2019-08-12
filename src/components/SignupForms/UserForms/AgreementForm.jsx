import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import { Done as DoneIcon } from "@material-ui/icons";

export default function AgreementForm(props) {
  const { agreementCheck, esignature } = props.errors;
  const agreementCheckError = agreementCheck ? true : false;
  const esignatureError = esignature ? true : false;
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        TERMS AND AGREEMENT
      </Typography>
      <Grid container>
        <Grid item xs={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2">
            Subscription must be paid to activate the discount perks of card.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            Cardholder must present card at the time of purchase.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            Card is non-transferrable.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            For discount disputes, e-mail original receipt to
            saverscardllc@gmail.com with the short description of dispute.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" gutterBottom>
            To cancel subscription, submit cancellation notice to
            saverscardllc@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <DoneIcon />
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
            required
            name="esignature"
            label={esignatureError ? esignature : "E-signature"}
            helperText="Please enter your full name"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
