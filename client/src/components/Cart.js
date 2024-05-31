// src/components/Cart.js
import React, { useState } from "react";

const Cart = ({ items, total, addItemToCart }) => {
  const [itemId, setItemId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = () => {
    addItemToCart({
      itemId,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });
    setItemId("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div>
        <input
          type="text"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAddItem}>Add to Cart</button>
      </div>
      <h3>Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemId} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
