import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Product from "./Product";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const store = useSelector((state) => state.store);
  return (
    <div className="mx-2">
      <Row>
        {store.products &&
          store.products.length &&
          store.products.map((prod) => {
            return (
              <Col lg="3" className="my-2">
                <ProductCard item={prod} />
              </Col>
            );
          })}
      </Row>

      {/* {store.products && store.products.length && (
        <Product item={store.products[2]} />
      )} */}
    </div>
  );
};

export default Products;
