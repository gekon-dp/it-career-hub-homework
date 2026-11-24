import { useState } from "react";
import Answer from "../answer/index.jsx";
import styles from "./styles.module.css";

const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;

function MathQuiz() {
  const [points, setPoints] = useState(0);
  const [a, setA] = useState(getRandomNumber);
  const [b, setB] = useState(getRandomNumber);

  const updatePoints = (isCorrect) => {
    setPoints((prevPoints) => (isCorrect ? prevPoints + 1 : prevPoints - 1));
    setA(getRandomNumber());
    setB(getRandomNumber());
  };

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.title}>Math Quiz</h2>
      <p className={styles.score}>
        Ваши очки: <strong>{points}</strong>
      </p>

      <div className={styles.task}>
        {a} + {b} = ?
      </div>

      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
