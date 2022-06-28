import style from "./style.module.scss";
const HomePageContent = () => {
  return (
    <div
      className={`${style.container} ${style["home-page"]}`}
      style={{
        animation: "fadeIn 1s forwards",
      }}
    >
      <div className={style["text-zone"]}>
        <h1>
          Hi,
          <br />
          I'm
          <img src="/images/logo-s.png" alt="developer" />
          limane
          <br />
          developer
        </h1>
        <h2>Front end / backend / mobile</h2>
        <a href="/contact" className={style["flat-button"]}>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default HomePageContent;
