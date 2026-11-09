import styles from "./styles.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <p className={styles.box}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam
        sapiente dolores sit hic! Atque soluta odit necessitatibus iste unde
        fuga officiis numquam, minus veritatis? Illo repellendus quod corrupti
        repellat. Assumenda tenetur quos nobis, non temporibus laborum eos in
        repellendus inventore ratione nemo nulla hic. Alias ipsam aliquid omnis.
        Quod consequuntur ipsa, quas placeat culpa vitae nesciunt eveniet
        consequatur fugiat!
      </p>
      <button className={styles.button}>Click me</button>
    </div>
  );
}
export default Container;
