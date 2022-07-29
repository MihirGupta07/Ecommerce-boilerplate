import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

const DISCOUNT = 100;
const DELIVERY_CHARGES = 50;
const Cart = () => {
  const store = useSelector((state) => state.store);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (store.cartItems.length) {
      let amount = 0;
      store.cartItems.map((item) => {
        amount += item.amount * item.quantity;
      });
      setTotalPrice(amount);
    }
  }, [store.cartItems]);

  const dispatch = useDispatch();
  const onPlaceOrder = () => {
    const payload = {};
    // payload.orderId = Math.floor(Math.random() * 100);
    payload.cartItems = store.cartItems;
    payload.totalPrice = totalPrice - DISCOUNT + DELIVERY_CHARGES;
    console.log(payload);
    fetch("http://localhost:5000/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then(() => {
        console.log("helo");
        Swal.fire({
          icon: "success",
          title: "Your Order has been placed!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location = "/";
        });
      });
  };
  return (
    <div
      style={{
        paddingInline: "15vw",

        minHeight: "90vh",
        backgroundColor: "#e5edf6",
      }}
    >
      {store.cartItems.length ? (
        <Row className="match-height">
          <Col lg="8">
            <Row>
              <Col lg="12">
                {store.cartItems.map((cartItem) => {
                  return <CartItem item={cartItem} />;
                })}
              </Col>
            </Row>
          </Col>
          <Col>
            <Card style={{ minWidth: "200px" }}>
              <CardBody>
                <CardTitle tag="h2"> Your Bill</CardTitle>
                <hr className="my-4" />
                <div className="d-flex justify-content-between mb-2">
                  <strong className="text-primary">Price</strong>{" "}
                  <span className="text-secondary">${totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <strong className="text-primary">Discount</strong>{" "}
                  <span className="text-secondary">${DISCOUNT}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <strong className="text-primary">Delivery Charges</strong>{" "}
                  <span className="text-secondary">${DELIVERY_CHARGES}</span>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between mb-2">
                  <h3 className="text-primary">Total</h3>{" "}
                  <h3 className="text-success">
                    ${totalPrice - DISCOUNT + DELIVERY_CHARGES}
                  </h3>
                </div>
                <hr className="my-4" />

                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  outline
                  onClick={() => onPlaceOrder()}
                >
                  Place order
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <Card style={{ height: "387px" }}>
          <CardBody className="d-flex justify-content-center  align-items-center">
            <h5 className="text-secondary">
              Your cart is empty! Try adding more products by clicking on
              products tab...
            </h5>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Cart;
