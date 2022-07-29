import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Product from "../Products/Product";
import ProductCard from "../Products/ProductCard";
import { useSelector } from "react-redux";

const Favourites = () => {
  const store = useSelector((state) => state.store);
  return (
    <div className="mx-2">
      <Row>
        {store.favourites &&
          store.favourites.length &&
          store.favourites.map((prod) => {
            return (
              <Col lg="3" className="my-2">
                <ProductCard item={prod} />
              </Col>
            );
          })}
      </Row>

      {/* {store.favourites && store.favourites.length && (
        <Product item={store.favourites[2]} />
      )} */}
    </div>
  );
};

export default Favourites;
