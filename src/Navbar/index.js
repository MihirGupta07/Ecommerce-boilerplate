import React, { useEffect, useState } from "react";
import { ShoppingCart } from "react-feather";
import { Badge, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleFetchFavourites, handleFetchProducts } from "../store";
const Navbar = () => {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const [itemcount, setItemcount] = useState(0);
  const getProductData = () => {
    fetch("http://localhost:5000/products/")
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log({ response });
        dispatch(handleFetchProducts(response));
        console.log("Success:", response);
      });
  };
  const getFavouritesData = () => {
    fetch("http://localhost:5000/favourites/")
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log({ response });
        dispatch(handleFetchFavourites(response));
        console.log("Success:", response);
      });
  };
  useEffect(() => {
    let count = 0;
    store.cartItems.map((item) => {
      count += item.quantity;
    });
    setItemcount(count);
  }, [store.cartItems]);

  useEffect(() => {
    getProductData();
    getFavouritesData();
  }, []);
  return (
    <div
      className="d-flex  justify-content-end align-items-center py-2"
      style={{
        paddingInline: "15vw",
        backgroundColor: "#0376ed",
        height: "10vh",
      }}
    >
      <h3 className="text-white">ShopKart.</h3>
      <Nav style={{ float: "right", flex: 1 }} className="justify-content-end">
        <NavItem>
          <NavLink tag={Link} to={"/products"} active className="text-white">
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active tag={Link} to="/favourites" className="text-white">
            Favourites
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/" className="text-white">
            Logout
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/cart" className="text-white d-flex">
            <ShoppingCart size={20} />
            <div
              style={{
                backgroundColor: "red",
                fontSize: "10px",
                borderRadius: "50px",
                padding: "5px",
                paddingTop: "0px",
                paddingBottom: "0px",
                marginLeft: "-5px",
                marginTop: "-5px",
                height: "15px",
              }}
            >
              {itemcount}
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
