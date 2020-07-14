import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
// Material UI
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// Icons
import LocalCafe from "@material-ui/icons/LocalCafe";
import Restaurant from "@material-ui/icons/Restaurant";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SearchIcon from "@material-ui/icons/Search";
// Components
import BeerList from "./BeerList";
import ShoppingCart from "./ShoppingCart";
import axios from "axios";

export default function FullWidthTabs() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const [innerTabIndex, setInnerTabIndex] = React.useState(0);
  const [productIncart, setProductInCart] = useState({});
  const [cartShowStatus, setCartShowStatus] = useState("");
  const [beers, setBeers] = useState([]);
  const [animate, setAnimate] = React.useState(true);

  const handleMainTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setAnimate(true);
    setCartShowStatus("root");
  };

  const handleMainTabSwipped = (index) => {
    setTabIndex(index);
    setAnimate(true);
  };

  const handleInnerTabChange = (event, newValue) => {
    setInnerTabIndex(newValue);
    setAnimate(true);
    setCartShowStatus("root");
  };

  const handleInnerTabSwipped = (index) => {
    setInnerTabIndex(index);
    setAnimate(true);
  };

  const addToCart = (product) => {
    setAnimate(false);
    setProductInCart(product);
    setCartShowStatus("mid");
  };

  const productOnClick = (item) => {
    setAnimate(false);
    setCartShowStatus("");
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return (
      <div hidden={value !== index}>
        {value === index && (
          <Grid container className={classes.mainTabContainer}>
            {children}
          </Grid>
        )}
      </div>
    );
  }

  async function getData() {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    let medBeers = response.data.filter(
      (beer) => beer.abv > 4.5 && beer.abv <= 7.5
    );
    return medBeers;
  }

  React.useEffect(() => {
    // Get data
    getData()
      .then((res) => {
        setBeers(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function InnerTabPanel(props) {
    const { children, value, index } = props;
    return animate ? (
      <Slide in={true} direction="left" timeout={600}>
        <div hidden={value !== index}>
          {value === index && <div>{children}</div>}
        </div>
      </Slide>
    ) : (
      <div hidden={value !== index}>
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Typography variant="h5" className={classes.appHeader}>
          Demo App
        </Typography>
        <MainTabs
          value={tabIndex}
          indicatorColor="primary"
          onChange={handleMainTabChange}
        >
          <MainTab label={<LocalCafe />} />
          <MainTab label={<Restaurant />} />
          <MainTab label={<SettingsApplicationsIcon />} />
          <MainTab label={<SearchIcon />} />
        </MainTabs>
      </AppBar>
      <Grid item xs={12} style={{ justifyItems: "center" }}>
        {tabIndex === 0 ? (
          <InnerTabs
            value={innerTabIndex}
            indicatorColor="primary"
            onChange={handleInnerTabChange}
            className={classes.innerTab}
          >
            <MainTab label="ALL" />
            <MainTab label="PIZZA" />
            <MainTab label="STEAK" />
          </InnerTabs>
        ) : (
          <InnerTabs
            value={innerTabIndex}
            indicatorColor="primary"
            className={classes.innerTab}
          >
            <MainTab label="ALL FOODS" />
          </InnerTabs>
        )}
      </Grid>
      <SwipeableViews
        index={tabIndex}
        onChangeIndex={handleMainTabSwipped}
        className={classes.innerTabContainer}
      >
        <TabPanel value={tabIndex} index={0}>
          <Grid item xs={12} style={{ width: "100%" }}>
            <SwipeableViews
              index={innerTabIndex}
              onChangeIndex={handleInnerTabSwipped}
            >
              <InnerTabPanel value={innerTabIndex} index={0}>
                <BeerList
                  beers={beers}
                  addToCart={addToCart}
                  productOnClick={() => productOnClick}
                />
              </InnerTabPanel>
              <InnerTabPanel value={innerTabIndex} index={1}>
                <BeerList
                  beers={beers}
                  addToCart={addToCart}
                  productOnClick={() => productOnClick}
                />
              </InnerTabPanel>
              <InnerTabPanel value={innerTabIndex} index={2}>
                <BeerList
                  beers={beers}
                  addToCart={addToCart}
                  productOnClick={() => productOnClick}
                />
              </InnerTabPanel>
            </SwipeableViews>
          </Grid>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Grid
            container
            justify="center"
            alignItems="stretch"
            className={classes.otherTabsContainer}
          >
            <Typography variant="h6">
              Put whatever you want here for the extra's
            </Typography>
          </Grid>
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <Grid
            container
            justify="center"
            className={classes.otherTabsContainer}
          >
            <Typography variant="h6">
              Put whatever you want here for the extra's
            </Typography>
          </Grid>
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <Grid
            container
            justify="center"
            className={classes.otherTabsContainer}
          >
            <Typography variant="h6">
              Put whatever you want here for the extra's
            </Typography>
          </Grid>
        </TabPanel>
      </SwipeableViews>
      <ShoppingCart product={productIncart} cartShowStatus={cartShowStatus} />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "#D32F2F",
  },
  appHeader: {
    textAlign: "center",
    color: "#212121",
  },
  mainTabContainer: {
    backgroundColor: "#FFF",
    width: "100%",
  },
  innerTabContainer: {
    width: "100%",
    backgroundColor: "#FFF",
  },
  innerTab: {
    marginTop: "5rem",
    width: "100%",
  },
  otherTabsContainer: {
    color: "#212121",
    padding: "1rem",
    textAlign: "center",
    minHeight: "35rem",
  },
});

const MainTabs = withStyles({
  root: {},
  indicator: {
    backgroundColor: "#000",
  },
})(Tabs);

const InnerTabs = withStyles({
  root: {
    backgroundColor: "#212121",
    "& div.MuiTabs-scroller": {
      "& .MuiTabs-flexContainer": {
        justifyContent: "center",
      },
    },
  },
  indicator: {
    backgroundColor: "#212121",
  },
})(Tabs);

const MainTab = withStyles((theme) => ({
  root: {
    color: "#FFF",
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover": {
      color: "#FFF",
      opacity: 1,
    },
    "&$selected": {
      color: "#FFF",
      backgroundColor: "#212121",
      borderRadius: "1rem 1rem 0rem 0rem",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#FFF",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
