import { useState, useContext } from "react";
import TodoContext from "../../context";
import styles from "./styles.module.css";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), title: title.trim(), completed: false },
    ]);
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a new task..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button} disabled={!title.trim()}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
