import { useState } from "react";
import styles from "./styles.module.css";

function NoteForm({ setNotes }) {
  const [noteTitle, setNoteTitle] = useState({
    id: "",
    title: "",
    completed: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNoteTitle((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!noteTitle.title.trim()) return;

    setNotes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: noteTitle.title.trim(),
        completed: noteTitle.completed,
      },
    ]);
    setNoteTitle({ id: "", title: "", completed: false });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите заметку"
        name="title"
        value={noteTitle.title}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Add note
      </button>
    </form>
  );
}

export default NoteForm;
