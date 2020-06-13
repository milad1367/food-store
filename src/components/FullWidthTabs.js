import React from "react";
import SwipeableViews from "react-swipeable-views";
// Material UI
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// Icons
import LocalCafe from "@material-ui/icons/LocalCafe";
import Restaurant from "@material-ui/icons/Restaurant";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SearchIcon from "@material-ui/icons/Search";
// Components
import BeerList from "./BeerList";

export default function FullWidthTabs() {
	const classes = useStyles();
	const [tabIndex, setTabIndex] = React.useState(0);
	const [innerTabIndex, setInnerTabIndex] = React.useState(0);

	const handleMainTabChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	const handleMainTabSwipped = (index) => {
		setTabIndex(index);
	};

	const handleInnerTabChange = (event, newValue) => {
		setInnerTabIndex(newValue);
	};

	const handleInnerTabSwipped = (index) => {
		setInnerTabIndex(index);
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
			<SwipeableViews
				index={tabIndex}
				onChangeIndex={handleMainTabSwipped}
				className={classes.innerTabContainer}
				style={{ marginTop: "5rem", width: "100%" }}
			>
				<TabPanel value={tabIndex} index={0}>
					<Grid xs={12}>
						<InnerTabs
							value={innerTabIndex}
							indicatorColor="primary"
							onChange={handleInnerTabChange}
						>
							<MainTab label="ALL" />
							<MainTab label="PIZZA" />
							<MainTab label="STEAK" />
						</InnerTabs>
					</Grid>
					<Grid item xs={12} style={{ width: "100%" }}>
						<SwipeableViews
							index={innerTabIndex}
							onChangeIndex={handleInnerTabSwipped}
						>
							<TabPanel value={innerTabIndex} index={0}>
								<BeerList />
							</TabPanel>
							<TabPanel value={innerTabIndex} index={1}>
								<BeerList />
							</TabPanel>
							<TabPanel value={innerTabIndex} index={2}>
								<BeerList />
							</TabPanel>
						</SwipeableViews>
					</Grid>
				</TabPanel>
				<TabPanel value={tabIndex} index={1}>
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
		height: "100%",
	},
	innerTabContainer: {
		width: "100%",
	},
	otherTabsContainer: {
		color: "#212121",
		padding: "1rem",
		textAlign: "center",
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
	},
	indicator: {
		backgroundColor: "#F0F",
		display: "none",
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
