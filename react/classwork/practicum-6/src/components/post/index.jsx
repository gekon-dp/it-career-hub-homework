import styles from "./styles.module.css";

function Post({ id, userId, title, body }) {
  return (
    <article className={styles.post}>
      <div className={styles.meta}>
        <span className={styles.postId}>#{id}</span>
        <span className={styles.userId}>UserID: {userId}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}

export default Post;
