import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/Theme/Header/Header";
import "../styles/globals.css";
import { envVars } from "./../Services/envVars";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const [loggedInUserInfo, setloggedInUserInfo] = useState(null);

  function verifyTokenThenUpdate_loggedInUserInfo(token) {
    // make http request to backend sever
    const url = envVars.BACKEND_API_ENDPOINT_FOR_DECODING_TOKEN;

    axios
      .get(url, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(function (response) {
        // handle success
        const verifiedToken = response.data;
        setloggedInUserInfo(verifiedToken);
      })
      .catch(function (error) {
        // handle error
        if (error == "Error: Network Error") alert("Network Error!");
        console.log("error occured and the error is " + error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    //verify token before storing it into loggedInUserInfo stateHook
    const token = window.localStorage.getItem("token");
    if (token) verifyTokenThenUpdate_loggedInUserInfo(token);
  }, []);
  return (
    <Fragment>
      <Header loggedInUserInfo={loggedInUserInfo} />
      <Component {...pageProps} loggedInUserInfo={loggedInUserInfo} />
    </Fragment>
  );
}

export default MyApp;
