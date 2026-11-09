import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function minusOne() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function plusOne() {
    setCount(count + 1);
  }

  console.log("render count"); // Срабатывает только при изменении count

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plusOne}>plus one</button>
      <button onClick={minusOne}>minus one</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
