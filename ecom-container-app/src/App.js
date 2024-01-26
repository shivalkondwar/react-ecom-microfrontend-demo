import React, { lazy } from "react";
import "./App.css";

const ProductApp = lazy(() => import("ProductApp/ProductList"));
const Cart = lazy(() => import("CartApp/Cart"));

function App() {
  return (
    <div className="App">
      <h1>E-Commerce-application</h1>
      <ProductApp></ProductApp>
      <Cart></Cart>
    </div>
  );
}

export default App;
