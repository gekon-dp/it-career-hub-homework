import { useState } from "react";
import styles from "./styles.module.css";

function Answer({ a, b, updatePoints }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userAnswer.trim() === "") return;

    const isCorrect = Number(userAnswer) === a + b;
    updatePoints(isCorrect);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Проверить
      </button>
    </form>
  );
}

export default Answer;
