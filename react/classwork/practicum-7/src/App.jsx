import TodoProvider from "./components/todoProvider";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="page">
        <div className="container">
          <h1 className="title">My ToDo list</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
