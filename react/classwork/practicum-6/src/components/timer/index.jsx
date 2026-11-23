import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (active) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [active, seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
      <div>
        <button onClick={() => setActive(true)}>Start</button>
        <button onClick={() => setActive(false)}>Stop</button>
        <button
          onClick={() => {
            setActive(false);
            setSeconds(0);
          }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
