import React from "react";
import {
  Avatar,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  CssBaseline,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Place as PlaceIcon,
  ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";
import MapComponent from "../components/map";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  map: {
    marginLeft: "auto"
  },
  mapContent: {
    position: "inherit"
  },
  avatar: {
    backgroundColor: "#39ac9b",
    fontSize: 15
  }
}));

const VendorCard = ({ vendor }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const address = vendor.address1 + " " + vendor.city + ", " + vendor.state;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {vendor.discountInPercent}%
          </Avatar>
        }
        title={vendor.businessName}
        subheader={vendor.vendorCategory}
      />
      {!expanded && (
        <React.Fragment>
          <CardMedia
            className={classes.media}
            image={window.location.origin + vendor.logoPath}
            title={vendor.businessName}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Get {vendor.discountInPercent}% off at {vendor.businessName} on
              all goods and services.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="Location"
              className={classes.map}
              onClick={handleExpandClick}
            >
              <PlaceIcon />
            </IconButton>
          </CardActions>
        </React.Fragment>
      )}
      {expanded && (
        <React.Fragment>
          <CardMedia>
            <MapComponent
              isMarkerShown
              className={classes.mapContent}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_N-X52vCtw4q5scuZf07YkqWBfRHX7uo&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `215px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={32.961991}
              lng={-96.820557}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {address}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="Go back"
              className={classes.map}
              onClick={handleExpandClick}
            >
              <ChevronLeftIcon />
            </IconButton>
          </CardActions>
        </React.Fragment>
      )}
    </Card>
  );
};

export default VendorCard;
