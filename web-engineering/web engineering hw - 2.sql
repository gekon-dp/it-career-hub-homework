use northwind;
select * , quantity * unit_price as total_price from order_details where purchase_order_id is null;

select CONCAT(first_name, ' ', last_name) as full_name from employees LIMIT 3 OFFSET 1;

select LEFT(order_date, 7) as order_month from orders;

select DISTINCT company from customers ORDER BY company DESC;

select id, order_id,
if (unit_price > 10, 'Expensive', 'Cheap') AS category 
from order_details;

select id, order_id,
CASE
when unit_price > 10 then 'Expensive'
else 'Cheap'
END AS category 
from order_details;