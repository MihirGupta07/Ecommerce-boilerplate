import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./LoginRegister/Index";
import Navbar from "./Navbar";
import Favourites from "./favourites";
import Product from "./Products/Product.js";
import Products from "./Products";
import Cart from "./cart";
function App() {
  return (
    <div style={{ backgroundColor: "#e5edf6" }}>
      <Navbar />
      <Routes>
        <Route path="KryptoAssessment/" element={<LoginRegister />} />
        <Route path="KryptoAssessment/products" element={<Products />} />
        <Route path="KryptoAssessment/favourites" element={<Favourites />} />

        <Route path="KryptoAssessment/products/product" element={<Product />} />
        <Route path="KryptoAssessment/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
