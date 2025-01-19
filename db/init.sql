CREATE TABLE IF NOT EXISTS items (  
    id SERIAL PRIMARY KEY,  
    name VARCHAR(255) NOT NULL,  
    price DECIMAL(10, 2) NOT NULL,  
    remaining INT NOT NULL  
);  

INSERT INTO items (name, price, remaining) VALUES  
('Awesome Laptop', 1499.99, FLOOR(RANDOM() * 11)),  
('Super Pen', 25.50, FLOOR(RANDOM() * 11)),  
('Cool Smartphone', 999.99, FLOOR(RANDOM() * 11)),  
('Stylish Backpack', 79.99, FLOOR(RANDOM() * 11)),  
('Wireless Headphones', 199.99, FLOOR(RANDOM() * 11)),  
('Gaming Mouse', 49.99, FLOOR(RANDOM() * 11)),  
('Mechanical Keyboard', 89.99, FLOOR(RANDOM() * 11)),  
('Smartwatch', 299.99, FLOOR(RANDOM() * 11)),  
('Action Camera', 399.99, FLOOR(RANDOM() * 11)),  
('Portable Charger', 29.99, FLOOR(RANDOM() * 11));  