import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function ProductModal(props) {
    return (
    <div>
      <Dialog
      
        open={props.show}
        onClose={props.close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {/* <img style={{width:"5vw", maxWidth:"50px",minWidth:"35px"}} src={props.product.image_url} /> */}
          tagline:{props.product.tagline},,,
          abv:{props.product.abv},,,
          des:{props.product.description},,,

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
