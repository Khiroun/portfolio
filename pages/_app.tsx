import "../styles/globalStyles.scss";

import "../styles/base.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
