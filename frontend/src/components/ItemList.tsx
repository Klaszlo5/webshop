import React from "react";
import { Item } from "../types";

interface Props {
  items: Item[];
  addToCart: (item: Item) => void;
}

const ItemList: React.FC<Props> = ({ items, addToCart }) => {
  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - ${item.price} (Remaining: {item.remaining})
            <button onClick={() => addToCart(item)} disabled={item.remaining === 0}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;