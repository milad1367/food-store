import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Components
import FullWidthTabs from "./FullWidthTabs";

function App() {
	const classes = useStyles();
	return (
		<Grid className={classes.root}>
			<Typography variant="h5" className={classes.appHeader}>
				Demo App
			</Typography>
			<FullWidthTabs />
		</Grid>
	);
}

export default App;

const useStyles = makeStyles({
	root: {
		backgroundColor: "#D32F2F",
	},
	appHeader: {
		textAlign: "center",
		color: "#212121",
	},
});
