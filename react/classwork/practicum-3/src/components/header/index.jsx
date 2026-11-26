import styles from "../../app.module.css";

function Header({ theme, setTheme }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>My Workspace</h1>
      <button
        type="button"
        className={styles.themeBtn}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
      </button>
    </header>
  );
}

export default Header;
