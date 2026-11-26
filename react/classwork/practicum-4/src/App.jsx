import { useState } from "react";
import Form from "./components/Form";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div className="app" style={color ? { background: color } : undefined}>
      <div className="colorBox">
        <Form setColor={setColor} />
      </div>

      <div className="notesCard">
        <NoteForm setNotes={setNotes} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
