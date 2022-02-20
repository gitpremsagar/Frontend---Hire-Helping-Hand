import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/Theme/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [token, settoken] = useState(null);
  useEffect(() => {
    // TODO: verify token before storing it into token stateHook
    settoken(window.localStorage.getItem("token"));
  }, []);
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} token={token} settoken={settoken} />
    </Fragment>
  );
}

export default MyApp;
