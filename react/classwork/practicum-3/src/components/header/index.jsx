import styles from "../../../src/app.module.css";
function Header({ theme, setTheme }) {
  return (
    <>
      <div className={theme === "light" ? styles.light : styles.dark}>
        <h1>Заголовок сайта</h1>
        <button
          className="ThemeSwitcher"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}>
          Theme change
        </button>
      </div>
    </>
  );
}

export default Header;
