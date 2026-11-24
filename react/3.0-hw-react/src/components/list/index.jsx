import { useState } from "react";
import styles from "./styles.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className={styles.listContainer}>
      <h2>Список приглашённых ({people.length})</h2>

      {people.length === 0 ? (
        <p className={styles.emptyMessage}>Список пуст</p>
      ) : (
        <ul className={styles.peopleList}>
          {people.map((person) => (
            <li key={person.id} className={styles.personItem}>
              <span className={styles.personInfo}>
                <strong>{person.name}</strong> — {person.age} лет
              </span>
              <button
                onClick={() => handleDelete(person.id)}
                className={styles.deleteButton}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
