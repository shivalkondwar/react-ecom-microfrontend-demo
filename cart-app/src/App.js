import React from "react";
import "./App.css";

function App({ cartItems }) {
  return (
    <div className="App">
      <h2>Cart Items</h2>
      {cartItems?.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
