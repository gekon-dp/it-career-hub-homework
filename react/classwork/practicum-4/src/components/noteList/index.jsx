import NoteItem from "../noteItem";
import styles from "./styles.module.css";

function NoteList({ notes }) {
  if (notes.length === 0) {
    return <p className={styles.empty}>List is empty...</p>;
  }

  return (
    <ul className={styles.noteList}>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </ul>
  );
}

export default NoteList;
