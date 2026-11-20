import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log("effect run");
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("effect cleanup");
      clearInterval(timerId);
    };
  }, []);

  console.log("render app");

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default App;
