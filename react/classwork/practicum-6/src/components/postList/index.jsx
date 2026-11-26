import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Post from "../post";
import styles from "./styles.module.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const LIMIT = 10;

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const feedRef = useRef(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setPosts(response.data);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
        setError("Не удалось загрузить посты. Проверьте интернет или консоль.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / LIMIT) || 1;
  const startIndex = (page - 1) * LIMIT;
  const currentPosts = posts.slice(startIndex, startIndex + LIMIT);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
    if (feedRef.current) feedRef.current.scrollTop = 0;
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
    if (feedRef.current) feedRef.current.scrollTop = 0;
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pageIndicator}>Page №{page}</h2>

      <div ref={feedRef} className={styles.feed}>
        {loading && <p className={styles.status}>Загрузка постов...</p>}
        {error && <p className={styles.status}>{error}</p>}
        {!loading &&
          !error &&
          currentPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
      </div>

      <div className={styles.pagination}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handlePrev}
          disabled={page === 1 || loading}>
          Prev
        </button>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handleNext}
          disabled={page === totalPages || loading}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList;
