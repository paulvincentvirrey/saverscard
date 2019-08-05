import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
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
import logo from "../img/logo.png";
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    paddingTop: theme.spacing(5)
  },
  appLogo: {
    maxHeight: 90,
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center"
  },
  info: {
    width: 60
  },
  signin: {
    width: 40
  },
  tabs: {
    marginTop: theme.spacing(8)
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
          <Box display="flex" justifyContent="center">
            <img src={logo} className={classes.appLogo} />
          </Box>
          <Tabs
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
          </SwipeableViews>
        </Container>
        {/* <Footer /> */}
      </Grid>
      {/* <div className={classes.info}></div>
      <div className={classes.signin}>SIGNIN</div> */}
    </Grid>
  );
};

export default Home;
