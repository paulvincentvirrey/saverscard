import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

export default function AgreementForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
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
              />
            }
            label="I understand and agree with the terms and conditions."
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="esignature"
            label="E-signature"
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
