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
			<FullWidthTabs />
		</Grid>
	);
}

export default App;

const useStyles = makeStyles({
	root: {
		backgroundColor: "#D32F2F",
		margin: "0px",
	},
});
