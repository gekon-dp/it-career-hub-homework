import styles from "./styles.module.css";

function Tasks({ tasks, removeTask }) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>Список задач пуст</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <li key={index} className={styles.item}>
          <span>{task}</span>
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => removeTask(index)}
            title="Удалить задачу">
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
