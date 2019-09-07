import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  ListItemText,
  TextField,
  Typography,
  makeStyles,
  ListItem
} from "@material-ui/core";
import { Edit } from "@material-ui/icons/";
const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    fontSize: "28px"
  },
  icons: {
    color: "#737373"
  },
  list: {
    fontSize: "12px",
    marginBottom: theme.spacing(-2)
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
        <List>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; Subscription must be paid to activate the discount
              perks of card.
            </ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; Cardholder must present card at the time of
              purchase.
            </ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; Card is non-transferrable.
            </ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; For discount disputes, e-mail original receipt to
              saverscardllc@gmail.com with the short description of dispute.
            </ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; For discount disputes, e-mail original receipt to
              saverscardllc@gmail.com with the short description of dispute.
            </ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>
              &#9679; &nbsp; This agreement automatically renews for another
              year.
            </ListItemText>
          </ListItem>
        </List>

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
