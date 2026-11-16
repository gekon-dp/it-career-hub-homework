USE `100726-wdm_heiko`;

CREATE TABLE delivery_orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    order_date DATE NOT NULL,
    delivery_days INT CHECK (delivery_days > 0),
    order_amount DECIMAL(8, 2) CHECK (order_amount > 0),
    delivery_status VARCHAR(100) DEFAULT 'Processing'
);

INSERT INTO delivery_orders (
    customer_name,
    order_date,
    delivery_days,
    order_amount,
    delivery_status
) VALUES
    ('Kostiantyn', '2026-11-16', 4, 110.00, DEFAULT),
    ('Anastasiia', '2026-11-14', 3, 210.00, 'Shipped'),
    ('Viktoria', '2026-11-10', 2, 310.00, 'Delivered'),
    ('Galina', '2026-11-16', 6, 600.00, DEFAULT),
    ('Bob', '2026-11-14', 7, 510.00, DEFAULT);

UPDATE delivery_orders
SET delivery_days = delivery_days + 1
WHERE delivery_status = 'Processing';

CREATE VIEW order_overview AS
SELECT 
    order_id,
    customer_name,
    order_amount,
    delivery_days,
    CASE 
        WHEN delivery_days > 5 THEN 'Delayed'
        WHEN delivery_days >= 3 THEN 'Standard'
        ELSE 'Express'
    END AS delivery_priority,
    CASE 
        WHEN order_amount > 500 THEN 'Yes'
        ELSE 'No'
    END AS large_order
FROM delivery_orders;

SELECT * FROM order_overview;
