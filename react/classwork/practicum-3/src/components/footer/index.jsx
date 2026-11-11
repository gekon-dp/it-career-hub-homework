import styles from "../../../src/app.module.css";
function Footer({ theme }) {
  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <p>Copyright</p>
    </div>
  );
}

export default Footer;
