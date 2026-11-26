import { useState } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Tasks from "./components/tasks";
import styles from "./app.module.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState(["first", "second", "third"]);
  const [inputValue, setInputValue] = useState("");

  function addTask(newTask) {
    if (!newTask.trim()) return;
    setTasks((oldTasks) => [...oldTasks, newTask.trim()]);
  }

  function removeTask(indexToRemove) {
    setTasks((oldTasks) => oldTasks.filter((_, idx) => idx !== indexToRemove));
  }

  function clearTasks() {
    setTasks([]);
  }

  return (
    <div className={`${styles.app} ${theme === "dark" ? styles.dark : ""}`}>
      <Header theme={theme} setTheme={setTheme} />

      <main className={styles.mainWrapper}>
        <MainContent />

        <section className={styles.todoCard}>
          <div className={styles.todoHeader}>
            <h2 className={styles.todoTitle}>Список задач</h2>
            {tasks.length > 0 && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={clearTasks}>
                Очистить всё
              </button>
            )}
          </div>

          <div className={styles.controls}>
            <input
              type="text"
              className={styles.input}
              placeholder="Новая задача..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask(inputValue);
                  setInputValue("");
                }
              }}
            />
            <button
              type="button"
              className={styles.addBtn}
              onClick={() => {
                addTask(inputValue);
                setInputValue("");
              }}>
              Add Task
            </button>
          </div>

          <Tasks tasks={tasks} removeTask={removeTask} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
