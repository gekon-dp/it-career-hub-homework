import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("effect run");
  }, [count, title]);

  console.log("render app");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>plus one</button>
      <br />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  );
}
export default App;
