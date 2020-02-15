import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "./Beer";
import { Row } from "antd";
export default function BeerList() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      // let medBeers = response.data.filter(
      //   beer => beer.abv > 4.5 && beer.abv <= 7.5
      // );
      let medBeers = response.data;
      const beers = medBeers.map(item => (
        <Beer
          key={item.id}
          image={item.image_url}
          tagline={item.tagline}
          description={item.description}
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
  return (
    <div>
      <Row>
        <Row gutter={16} justify="center" type="flex">
          {beers}
        </Row>
      </Row>
    </div>
  );
}
