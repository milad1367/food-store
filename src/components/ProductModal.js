import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, Typography, Collapse } from "@material-ui/core";

export default function ProductModal(props) {
  const { tagline, abv, description, image_url } = props.product;
  const [checked, setChecked] = React.useState();
  React.useEffect(() => {
    setChecked(false);
  }, [props.show]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Dialog
      open={props.show}
      PaperProps={{
        style: {
          background: "#30302F",
          paddingTop: "10px",
          paddingBottom: "4px",
        },
      }}
      onClose={props.close}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Typography
              variant="h6"
              style={{ color: "#fff", marginBottom: "4px" }}
            >
              {" "}
              Beer Name
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#C9C9C7" }}>
              {tagline}
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#C9C9C7" }}>
              {abv}
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#C9C9C7" }}>
              <Collapse in={checked} collapsedHeight={40}>
                {description}
              </Collapse>
              <a onClick={handleChange}>{checked ? "less" : "more"}</a>
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sm={5}
            md={5}
            lg={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#F2F8FA",
                width: "100px",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <img
                style={{
                  width: "26%",
                  height: "76%",
                }}
                src={image_url}
              />
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.addToCart}
          color="primary"
          style={{
            backgroundColor: "#F2F8FA",
            color: "#313236",
            borderRadius: "10px",
            padding: "10px 32px 10px 32px",
          }}
        >
          ADD TO CART
        </Button>
      </DialogActions>
    </Dialog>
  );
}
