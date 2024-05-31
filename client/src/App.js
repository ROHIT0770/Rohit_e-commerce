
import React, { useState } from 'react';
import Cart from './components/Cart';

const App = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = async (item) => {
    const response = await fetch('http://localhost:3000/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();
    setItems(data.cart.items);
    setTotal(data.cart.total);
  };

  return (
    <div className="App">
      <h1>Simple E-commerce Platform</h1>
      <Cart items={items} total={total} addItemToCart={addItemToCart} />
    </div>
  );
};

export default App;
