import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import '../css/App.css';
import FullWidthTabs from './FullWidthTabs';

function App() {
  return (
    <Grid className="App" style={{backgroundColor: 'red'}}>
      <Typography variant="h5" style={{textAlign: 'center'}}>
        Demo App
      </Typography>
       <FullWidthTabs />
    </Grid>
  );
}

export default App;
