import "./App.css";
import Container from "./components/container";
import Counter from "./components/counter";

function App() {
  console.log("render App"); // Сработает только при первой загрузке

  return (
    <div>
      <Counter />
      <Container />
    </div>
  );
}

export default App;
