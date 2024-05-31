const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated database
let cart = {
  items: [],
  total: 0,
};

// Endpoint to add an item to the cart
app.post("/add-to-cart", (req, res) => {
  const { itemId, price, quantity } = req.body;

  if (!itemId || price === undefined || quantity === undefined) {
    return res
      .status(400)
      .json({ error: "Please provide itemId, price, and quantity" });
  }

  // Update cart items and total
  const newItem = { itemId, price, quantity };
  cart.items.push(newItem);
  cart.total += price * quantity;

  res.status(200).json({ message: "Item added to cart", cart });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
