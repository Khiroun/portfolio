import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import styles from "./index.module.scss";

const SideBar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <a href="/" className={styles.logo}>
        <>
          <img src="/images/logo-s.png" alt="logo" />
          <img
            src="/images/logo_sub.png"
            alt="slobodan"
            className={styles["sub-logo"]}
          />
        </>
      </a>
      <nav className={styles["nav-tag"]}>
        <a href="/" className={styles.active}>
          <FaHome />
        </a>
        <a href="/about" className={styles["about-link"]}>
          <FaUser />
        </a>
        <a href="/contact" className={styles["contact-link"]}>
          <FaEnvelope />
        </a>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohamed-amine-khiroun-b89913b5/"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Khiroun">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mohamed_aminekhiroun/"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100072089822341"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
