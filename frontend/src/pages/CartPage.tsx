import React, { useState } from "react";
import Cart from "../components/Cart";
import { Item } from "../types";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);

  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;