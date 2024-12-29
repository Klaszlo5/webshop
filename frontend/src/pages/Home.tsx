import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { Item } from "../types";

interface Props {
  items: Item[];
}

const Home: React.FC<Props> = ({ items }) => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <h1>Webshop</h1>
      <ItemList items={items} addToCart={addToCart} />
      <div>
        <h2>Your Cart</h2>
        {cart.length} items
      </div>
    </div>
  );
};

export default Home;