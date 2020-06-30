import React, { useState } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function Beer(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={4}
      className={classes.beerCard}
      onClick={(item) => props.onClick(item)}
    >
      <Grid container>
        <Grid item xs={12} className={classes.beerImageContainer}>
          <img
            alt={props.tagline}
            src={props.image}
            className={classes.beerImage}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            {props.tagline.length < 10
              ? props.tagline
              : `${props.tagline.slice(0, 10)}...`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  beerCard: {
    padding: "0.5rem",
    textAlign: "center",
  },
  beerImageContainer: {
    padding: "0.5rem",
    borderRadius: "1rem",
    border: "2px solid #616161",
  },
  beerImage: {
    width: "2rem",
    maxWidth: "50px",
    minWidth: "35px",
    minHeight: "150px",
  },
});
