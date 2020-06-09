import React from "react";
// Material UI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Icons
import LocalCafe from "@material-ui/icons/LocalCafe";
import Restaurant from "@material-ui/icons/Restaurant";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SearchIcon from "@material-ui/icons/Search";
// Components
import BeerList from "./BeerList";

export default function FullWidthTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        hidden={value !== index}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
    <MainTabs
    value={tabIndex}
    indicatorColor="primary"
    onChange={handleChange}
  >
    <MainTab label={<LocalCafe />} />
    <MainTab label={<Restaurant />} />
    <MainTab label={<SettingsApplicationsIcon />} />
    <MainTab label={<SearchIcon />} />
  </MainTabs>
  <TabPanel value={tabIndex} index={0}>
  <BeerList />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
  Tab 2
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
  Tab 3
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
  Tab 4
      </TabPanel>
  </div>
  );
}

const MainTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#000',
  },
})(Tabs);

const MainTab = withStyles((theme) => ({
  root: {
    color: '#FFF',
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      color: '#FFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFF',
      backgroundColor: "#212121",
      borderRadius: '1rem 1rem 0rem 0rem',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFF',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);