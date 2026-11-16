USE northwind;

/* 1. Возраст заказа
SQL-задача: Для каждого заказа вычислить количество дней с даты заказа (order_date) до текущей даты.
Получившееся поле назвать order_age_days. Отсортировать по полю order_age_days в порядке убывания.
*/

SELECT 
    id,
    order_date,
    DATEDIFF(CURDATE(), order_date) AS order_age_days
FROM orders;
   
/* 2. Заказы, оформленные в рабочие дни
   SQL-задача: Вывести только заказы, оформленные с понедельника по пятницу.
*/

SELECT 
    id, order_date, DAYNAME(order_date) AS order_day
FROM
    orders
WHERE
    DAYOFWEEK(order_date) BETWEEN 2 AND 6
ORDER BY WEEKDAY(order_date);

/* 3. Сколько дней прошло после отправки
SQL-задача: Вычислить количество дней с момента отправки до сегодняшнего дня. 
Назовите получившееся поле days_after_shipping. Отсортировать по полю days_after_shipping в порядке возрастания.
*/

SELECT 
    id,
    shipped_date,
    DATEDIFF(CURDATE(), shipped_date) AS days_after_shipping
FROM
    orders
WHERE
    shipped_date IS NOT NULL
ORDER BY days_after_shipping DESC;

/* 4. Формирование полного описания заказа
SQL-задача: Для каждого заказа сформировать текстовую строку, содержащую: номер заказа (id), день недели,
в который был отправлен заказ (shipped_date). Получившееся поле назвать shipping_info.
*/

SELECT id, order_date, shipped_date,
CONCAT('Заказ ', id, ' был отправлен в ', DAYNAME(order_date), ' через ', DATEDIFF(shipped_date, order_date), ' дней после оформления') AS shipping_info
from orders
WHERE
shipped_date IS NOT NULL;

/* 5. Расчет плановой даты доставки
SQL-задача: Для каждого заказа вычислить ожидаемую дату доставки, если доставка должна быть выполнена через 7 дней
после даты оформления  заказа (order_date). Получившееся поле назовите expected_delivery_date.
*/

SELECT 
    id,
    customer_id,
    DATE_FORMAT(DATE_ADD(order_date, INTERVAL 7 DAY),
            '%d.%m.%Y') AS expected_delivery_date
FROM
    orders
ORDER BY expected_delivery_date;
