import React, { useState } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Beer from "./Beer";
import ProductModal from "./ProductModal";

export default function BeerList(props) {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);

  // When user clicks on an item
  const productOnClick = (item) => {
    setProduct(item);
    setShowProduct(true);
    props.productOnClick(item);
  };

  const addToCart = (product) => {
    setShowProduct(false);
    props.addToCart(product);
  };
  const beers = props.beers.map((item) => (
    <Beer
      key={item.id}
      image={item.image_url}
      tagline={item.tagline}
      description={item.description}
      onClick={() => productOnClick(item)}
    />
  ));
  return (
    <div>
      <ProductModal
        addToCart={() => addToCart(product)}
        close={() => setShowProduct(false)}
        product={product}
        show={showProduct}
      />
      <Grid container spacing={1} className={classes.beerCardContainer}>
        {beers}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  beerCardContainer: {
    padding: "0.5rem",
    textAlign: "center",
  },
});
