import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./LoginRegister/Index";
import Navbar from "./Navbar";
import Favourites from ".KryptoAssessment/favourites";
import Product from ".KryptoAssessment/products/Product";
import Products from ".KryptoAssessment/products";
import Cart from "./cart";
function App() {
  return (
    <div style={{ backgroundColor: "#e5edf6" }}>
      {window.location.href !==
        "https://mihirgupta07.github.io/KryptoAssessment/" && <Navbar />}
      <Routes>
        <Route path="KryptoAssessment/" element={<LoginRegister />} />
        <Route path="KryptoAssessment/products" element={<Products />} />
        <Route path="KryptoAssessment/favourites" element={<Favourites />} />

        <Route path="KryptoAssessment/product" element={<Product />} />
        <Route path="KryptoAssessment/cart" element={<Cart />} />
      </Routes>

      {/* <Products /> */}
      {/* <Product /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
