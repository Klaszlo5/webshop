CREATE TABLE IF NOT EXISTS items (  
    id SERIAL PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,  
    price DECIMAL(10, 2) NOT NULL,  
    remaining INT NOT NULL  
);  

INSERT INTO items (name, price, remaining) VALUES  
('Item 1', 10.00, 100),  
('Item 2', 15.50, 50),  
('Item 3', 7.25, 200),  
('Item 4', 20.00, 75),  
('Item 5', 5.99, 300);  

CREATE INDEX idx_item_name ON items (name);  