import { useContext } from "react";
import GlobalContext from "../../context";

function Counter() {
  const { count, increment, decrement, reset } = useContext(GlobalContext);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
