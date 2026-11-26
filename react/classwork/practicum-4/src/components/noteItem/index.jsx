import { useState } from "react";
import styles from "./styles.module.css";

function NoteItem({ title, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  function handleChange() {
    setIsCompleted((prev) => !prev);
  }

  return (
    <li className={styles.noteItem}>
      <label className={styles.label}>
        <span className={`${styles.text} ${isCompleted ? styles.done : ""}`}>
          {title}
        </span>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isCompleted}
          onChange={handleChange}
        />
      </label>
    </li>
  );
}

export default NoteItem;
