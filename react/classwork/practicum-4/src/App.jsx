import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [color, setColor] = useState("black");

  console.log("render App");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: color,
      }}>
      <Form setColor={setColor} />
    </div>
  );
}
export default App;
