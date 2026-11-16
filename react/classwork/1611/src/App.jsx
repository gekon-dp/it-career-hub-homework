import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.length < 2) {
      setIsValid(false);
      setMessage("User name should be at more than 2 letters");
    } else {
      setIsValid(true);
      setMessage("Name is valid!");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <p style={{ color: isValid ? "green" : "red" }}>{message}</p>
      <button type="submit">Register</button>
    </form>
  );
}
export default App;
