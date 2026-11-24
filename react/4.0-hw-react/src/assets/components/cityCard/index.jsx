import styles from "./styles.module.css";

function CityCard({ city }) {
  if (!city) {
    return (
      <p className={styles.placeholder}>
        Выберите город из списка выше, чтобы увидеть подробную информацию.
      </p>
    );
  }

  return (
    <div className={styles.card}>
      <img src={city.imageUrl} alt={city.name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{city.name}</h2>
        <p className={styles.description}>{city.description}</p>

        <h3 className={styles.factsTitle}>Интересные факты:</h3>
        <ul className={styles.factsList}>
          {city.facts.map((fact, index) => (
            <li key={index} className={styles.factItem}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CityCard;
