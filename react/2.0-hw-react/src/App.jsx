import Greeting from "./components/Greeting/Index";
import OrderStatus from "./components/OrderStatus/Index";
import ShoppingList from "./components/ShoppingList/Index";

function App() {
  const items = ["apple", "banana", "kiwi"];

  const orders = [
    { orderId: 15, status: "доставлен" },
    { orderId: 16, status: "обработан" },
    { orderId: 17, status: "в пути" },
    { orderId: 137, status: "в пути" },
  ];
  return (
    <div>
      <Greeting name="Kostiantyn" />
      <ShoppingList arr={items} />
      {orders.map((order) => {
        return (
          <OrderStatus
            key={order.orderId}
            orderId={order.orderId}
            status={order.status}
          />
        );
      })}
    </div>
  );
}

export default App;
