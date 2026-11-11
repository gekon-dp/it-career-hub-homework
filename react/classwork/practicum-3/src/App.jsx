import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
// import styles from "./app.module.css";
import { useState } from "react";
import Tasks from "./components/tasks";

function App() {
  const [theme, setTheme] = useState("light");

  const [tasks, setTasks] = useState(["first", "second", "third"]);

  const [inputValue, setInputValue] = useState("");

  function addTask(newTask) {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <MainContent theme={theme} />
      <input
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          addTask(inputValue);
          setInputValue("");
        }}>
        add Task
      </button>
      <Tasks tasks={tasks} addTask={addTask} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
