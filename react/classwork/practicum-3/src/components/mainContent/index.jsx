import styles from "../../../src/app.module.css";

function MainContent({ theme }) {
  return (
    <>
      <div className={theme === "light" ? styles.light : styles.dark}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </>
  );
}

export default MainContent;
