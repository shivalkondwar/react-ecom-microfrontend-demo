import React, { lazy } from "react";
import "./App.css";

const ProductApp = lazy(() => import("ProductApp/ProductList"));

function App() {
  return (
    <div className="App">
      <h1>E-Commerce-application</h1>
      <ProductApp></ProductApp>
    </div>
  );
}

export default App;
