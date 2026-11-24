import styles from "./styles.module.css";

function AuthBlock() {
  const handleSignIn = (provider) => {
    alert(`Выбран вход через ${provider}`);
  };

  return (
    <main className={styles.authMain}>
      <h1 className={styles.authTitle}>LIFE IS WASTED ON THE LIVING</h1>

      <p className={styles.authSubtitle}>
        Sign in
        <br />
        with
      </p>

      <div className={styles.socialBox}>
        <button
          type="button"
          className={styles.socialBtn}
          aria-label="Sign in with Apple"
          onClick={() => handleSignIn("Apple")}>
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <path
              fill="currentColor"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
            />
          </svg>
        </button>

        <button
          type="button"
          className={styles.socialBtn}
          aria-label="Sign in with Google"
          onClick={() => handleSignIn("Google")}>
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <path
              fill="currentColor"
              d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
            />
          </svg>
        </button>

        <button
          type="button"
          className={styles.socialBtn}
          aria-label="Sign in with X"
          onClick={() => handleSignIn("X")}>
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default AuthBlock;
