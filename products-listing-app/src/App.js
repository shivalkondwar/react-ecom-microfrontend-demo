import React, { useState } from "react";
import "./App.css";

function App({ onAddToCart }) {
  const [productList, setProductList] = useState([
    "product1",
    "product2",
    "product3",
  ]);
  return (
    <div className="App">
      <h2>Products List</h2>
      <div className="product-list">
        {productList.map((product) => {
          return (
            <div className="product-card">
              <p>{product}</p>
              <button
                onClick={() => {
                  onAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
