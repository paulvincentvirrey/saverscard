import React, { Component } from "react";
import {
  Avatar,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CssBaseline,
  makeStyles
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Place as PlaceIcon
} from "@material-ui/icons";
import MapModal from "./mapModal";

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
  avatar: {
    backgroundColor: "#39ac9b",
    fontSize: 15
  }
}));

const VendorGrid = ({ vendors }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container className={classes.cardGrid} maxWidth="lg"> */}
      <Grid container spacing={4}>
        {vendors.map(vendor => (
          <Grid item key={vendor._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    {vendor.discountRate}%
                  </Avatar>
                }
                title={vendor.name}
                subheader={vendor.category}
              />
              <CardMedia
                className={classes.media}
                image={window.location.origin + vendor.image}
                title={vendor.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Get {vendor.discountRate}% off at {vendor.name} on all goods
                  and services.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="Location" className={classes.map}>
                  <PlaceIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* </Container> */}
    </React.Fragment>
  );
};

export default VendorGrid;

// class VendorGrid extends Component {
//   viewLocation = location => {};
//   render() {
//     const { vendors } = this.props;

//     let content = [];

//     vendors.forEach((vendor, index) => {
//       console.log(vendor.image);
//       if ((index + 1) % 3 === 0) {
//         content.push(
//           <Row>
//             <Col l={4} m={6} s={12} key={vendor._id}>
//               <Card
//                 key={vendor._id}
//                 header={
//                   <CardTitle image={require("../img/stores/bestbuy.jpg")} />
//                 }
//                 actions={[<MapModal trigger={<a href="#">View Location</a>} />]}
//               >
//                 <h5 className="card-title">
//                   {vendor.discountRate}% off at {vendor.name}
//                 </h5>
//                 <p className="card-text">
//                   Get {vendor.discountRate}% off at {vendor.name} on all goods
//                   and services.
//                 </p>
//               </Card>
//             </Col>
//           </Row>
//         );
//       } else {
//         content.push(
//           <Col l={4} m={6} s={12} key={vendor._id}>
//             <Card
//               key={vendor._id}
//               header={
//                 <CardTitle image={require("../img/stores/bestbuy.jpg")} />
//               }
//               actions={[
//                 <MapModal
//                   title={vendor.name}
//                   trigger={<a href="#">View Location</a>}
//                 />
//               ]}
//             >
//               <h5 className="card-title">
//                 {vendor.discountRate}% off at {vendor.name}
//               </h5>
//               <p className="card-text">
//                 Get {vendor.discountRate}% off at {vendor.name} on all goods and
//                 services.
//               </p>
//             </Card>
//           </Col>
//         );
//       }
//     });
//     return <React.Fragment>{content}</React.Fragment>;
//   }
// }

// export default VendorGrid;
