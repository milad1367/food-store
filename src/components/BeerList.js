import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "./Beer";
import { Row, Col } from "antd";
export default function BeerList() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      console.log(response.data);
      const beers = response.data.map(item => (
        <li key={item.id}>
          <Beer
            image={item.image_url}
            tagline={item.tagline}
            description={item.description}
          />
        </li>
      ));
      return beers;
    }
    getData()
      .then(res => {
        setBeers(res);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Row>
      <ul>{beers}</ul>
    </Row>
  );
}
