import React, { lazy, useState } from "react";
import "./App.css";

const ProductApp = lazy(() => import("ProductApp/ProductList"));
const Cart = lazy(() => import("CartApp/Cart"));

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <h1>E-Commerce-application</h1>
      <ProductApp
        onAddToCart={(product) => {
          cartItems.push(product);
          setCartItems([...cartItems]);
        }}
      ></ProductApp>
      <Cart cartItems={cartItems}></Cart>
    </div>
  );
}

export default App;
