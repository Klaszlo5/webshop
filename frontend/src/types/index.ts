export interface Item {
  id: number;
  name: string;
  price: number;
  remaining: number;
}

export interface CartItem extends Item {
  quantity: number;
}

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
}