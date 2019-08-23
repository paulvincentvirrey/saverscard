import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  Card,
  Container,
  Box,
  Grid,
  Hidden,
  MobileStepper,
  Tabs,
  Tab,
  Typography,
  makeStyles,
  useTheme
} from "@material-ui/core";
import Carousel from "./carousel";
import SignIn from "./signin";
import SignUp from "./signup";
import Image from "../img/sidebg.png";

const useStyles = makeStyles(theme => ({
  root: {
    //backgroundImage: `url(${Image})`,
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: "#fdfaf0"
  },
  banner: {
    maxHeight: 90,
    margin: "auto",
    marginTop: 7,
    justifyContent: "center",
    color: "#3f51b5"
  },
  info: {
    width: 60
  },
  signin: {
    width: 40
  },
  tabs: {
    marginTop: theme.spacing(2)
  },
  tabName: {
    fontSize: 20
  },
  carousel: {
    position: "relative",
    width: "50%"
  },
  carouselSlide: {
    backgroundColor: "#000000"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const Home = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <Grid container>
      <Hidden mdDown>
        <Grid item lg={8}>
          <Carousel />
        </Grid>
      </Hidden>

      <Grid item lg={4} md={12} className={classes.root}>
        <Container>
          {/* <Card className={classes.card}> */}
          <Box display="flex" justifyContent="center">
            <Typography className={classes.banner} variant="h4" component="h3">
              WELCOME
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography className={classes.banner} variant="h5" component="h5">
              SIGN IN
            </Typography>
          </Box>

          <SignIn />
          {/* <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className={classes.tabs}
            // variant="fullWidth"
            // aria-label="full width tabs example"
          >
            <Tab
              label="Sign In"
              {...a11yProps(0)}
              className={classes.tabName}
            />
            <Tab
              label="Sign Up"
              {...a11yProps(1)}
              className={classes.tabName}
            />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <SignUp />
            </TabPanel>
          </SwipeableViews> */}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
