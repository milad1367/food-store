import React, { useState, useEffect } from "react";
import axios from "axios";
// Material UI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Beer from "./Beer";
import ProductModal from "./ProductModal";

export default function BeerList(props) {
  const classes = useStyles();
  const [beers, setBeers] = useState([]);
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);

  // When user clicks on an item
  const productOnClick = (item) => {
    setProduct(item);
    setShowProduct(true);
    props.productOnClick(item);
  };

  async function getData() {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    let medBeers = response.data.filter(
      (beer) => beer.abv > 4.5 && beer.abv <= 7.5
    );
    const beers = medBeers.map((item) => (
      <Beer
        key={item.id}
        image={item.image_url}
        tagline={item.tagline}
        description={item.description}
        onClick={() => productOnClick(item)}
      />
    ));
    return beers;
  }

  useEffect(() => {
    // Get data
    getData()
      .then((res) => {
        setBeers(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setShowProduct(false);
    props.addToCart(product);
  };

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
