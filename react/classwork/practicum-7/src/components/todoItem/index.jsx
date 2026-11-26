import TodoContext from "../../context";
import { useContext } from "react";
import styles from "./styles.module.css";

function TodoItem({ id, title, completed }) {
  const { todos, setTodos } = useContext(TodoContext);

  function toggleComplete() {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo,
      ),
    );
  }

  function deleteTodo() {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <li className={styles.item}>
      <label className={styles.content}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={toggleComplete}
          checked={completed}
        />
        <span className={`${styles.text} ${completed ? styles.completed : ""}`}>
          <span className={styles.id}>#{id}</span> {title}
        </span>
      </label>

      <button
        type="button"
        onClick={deleteTodo}
        className={styles.deleteBtn}
        aria-label="Удалить задачу">
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
