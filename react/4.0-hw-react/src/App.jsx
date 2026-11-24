import { useState } from "react";
import CitySelector from "./assets/components/citySelector";
import CityCard from "./assets/components/cityCard";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app-container">
      <h1>Города Японии</h1>
      <CitySelector onSelectCity={setSelectedCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
