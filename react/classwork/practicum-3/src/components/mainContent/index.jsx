import styles from "../../app.module.css";

function MainContent() {
  return (
    <section className={styles.contentSection}>
      <article className={styles.articleCard}>
        <h2 className={styles.articleTitle}>Первый блок контента</h2>
        <p className={styles.articleText}>
          Этот блок автоматически меняет фон, цвет текста и рамки при
          переключении темы в шапке сайта.
        </p>
      </article>

      <article className={styles.articleCard}>
        <h2 className={styles.articleTitle}>Второй блок контента</h2>
        <p className={styles.articleText}>
          Использование CSS-переменных позволяет поддерживать единый стиль во
          всех дочерних компонентах без дублирования кода.
        </p>
      </article>
    </section>
  );
}

export default MainContent;
