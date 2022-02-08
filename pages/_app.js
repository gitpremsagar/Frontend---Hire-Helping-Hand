import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/Theme/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
