import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./LoginRegister/Index";
import Navbar from "./Navbar";
import Favourites from "./favourites";
import Product from "./Products/Product";
import Products from "./Products";
import Cart from "./cart";
function App() {
  return (
    <div style={{ backgroundColor: "#e5edf6" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="products" element={<Products />} />
        <Route path="favourites" element={<Favourites />} />

        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      {/* <Products /> */}
      {/* <Product /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
