import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch the items from the backend API
    const fetchItems = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items", error);
      }
    };

    fetchItems();
  }, []);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const placeOrder = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      });
      const data = await response.json();
      // Handle order confirmation or errors
      console.log(data);
    } catch (error) {
      console.error("Failed to place order", error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home items={items} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <CartPage cart={cart} placeOrder={placeOrder} />
        </Route>
        <Route path="/order-confirmation">
          <OrderConfirmationPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;