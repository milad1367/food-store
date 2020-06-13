import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function ProductModal(props) {
    return (
    <div>
      <Dialog
        open={props.show}
        onClose={props.close}
      >
        <DialogContent>
            <Grid container 
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            >
            <Grid item xs={7}>
              <Typography variant="h6">
              {props.product.tagline}
              </Typography>
              <Typography variant="subtitle1">
              {props.product.abv}
              </Typography>
              <Typography variant="caption">
              {props.product.description}
              </Typography>
            </Grid>
            <Grid item xs={5}>
            <img style={{width:"5vw", maxWidth:"50px",minWidth:"35px"}} src={props.product.image_url} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.addToCart} color="primary" autoFocus>
            ADD TO CART
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
