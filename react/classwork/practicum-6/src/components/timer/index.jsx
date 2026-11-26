import { useState, useEffect } from "react";
import styles from "./styles.module.css";

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
  }, [active]);

  return (
    <div className={styles.container}>
      <h1 className={styles.display}>{seconds}</h1>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(true)}
          disabled={active}>
          Start
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(false)}
          disabled={!active}>
          Stop
        </button>
        <button
          type="button"
          className={styles.btn}
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
