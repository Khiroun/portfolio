import { HomePageContent, Sidebar } from "../src/components";
import styles from "../src/styles/homeStyles.module.scss";
function HomePage() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.page}>
        <span className={`${styles.tags} ${styles["top-tags"]}`}>
          &lt;body&gt;
        </span>
        <HomePageContent />
        <span className={`${styles.tags} ${styles["bottom-tags"]}`}>
          &lt;body&gt;
          <br />
          <span className={styles["bottom-tag-html"]}>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
