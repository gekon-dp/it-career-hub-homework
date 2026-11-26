import TodoContext from "../../context";
import { useContext } from "react";
import TodoItem from "../todoItem";
import styles from "./styles.module.css";

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p className={styles.empty}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;
