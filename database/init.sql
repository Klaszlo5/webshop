CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  remaining INT NOT NULL
);

INSERT INTO items (name, price, remaining) VALUES
  ('Awesome Laptop', 1499.99, 5),
  ('Super Pen', 25.50, 10),
  ('Gaming Mouse', 45.99, 3),
  ('Wireless Headphones', 89.99, 7),
  ('Smartwatch', 199.99, 4),
  ('Bluetooth Speaker', 59.99, 6),
  ('Portable Charger', 29.99, 8),
  ('Mechanical Keyboard', 99.99, 2),
  ('Smartphone Case', 15.99, 10),
  ('Electric Kettle', 39.99, 5);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'paid'
);

INSERT INTO orders (created_at, status) VALUES (NOW(), 'paid');