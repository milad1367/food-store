import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "./Beer";
import { Row } from "antd";
import ProductModal from "./ProductModal";
import ShoppingCart from "./ShoppingCart";

export default function BeerList() {
  const [beers, setBeers] = useState([]);
  const [product,setProduct] = useState({});
  const [productIncart,setProductInCart] = useState({});
  const [showProduct,setShowProduct] = useState(false);
  const [cartShowStatus,setCartShowStatus] = useState("");


  const productOnClick = (item) => {
    setProduct(item);
    setShowProduct(true);
    setCartShowStatus('');
  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      let medBeers = response.data.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5);
      const beers = medBeers.map(item => (
          <Beer
            key={item.id}
            image={item.image_url}
            tagline={item.tagline}
            description={item.description}
            onClick={()=>productOnClick(item)}
            
          />
      ));
      return beers;
    }
    getData()
      .then(res => {
        setBeers(res);
      })
      .catch(err => console.log(err));
  }, []);


  const addToCart = (product) => {
    setShowProduct(false);
    setProductInCart (product);
    setCartShowStatus('mid');
  }
  return (
    <div>
    <ProductModal addToCart={()=>addToCart(product)} close={()=>setShowProduct(false)} product={product}  show={showProduct} />
    <Row gutter={24} type="flex">
      {beers}
    </Row>
     <ShoppingCart product={productIncart}  cartShowStatus={cartShowStatus} />
    </div>
  );
}
