import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/Theme/Header/Header";
import "../styles/globals.css";
import { envVars } from "./../Services/envVars";
import axios from "axios";
import Footer from "../components/Theme/Footer/footer";
import { useRouter } from "next/router";
import { extractParamsFromURL } from "../Services/extractParamsFromURL";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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

  // set freelancer/client mode based on url param `useHireHelpingHandAs`
  const [isUserFreelancer, setisUserFreelancer] = useState(false);
  useEffect(() => {
    const currentUrl = window.location.href;
    //console.log("url on top = ", currentUrl);
    const query = extractParamsFromURL(currentUrl);
    const useHireHelpingHandAs = query.useHireHelpingHandAs || "client"; //Note that we're also setting a default value of client for the `useHireHelpingHand` parameter in case it's not present in the URL. This ensures that our code doesn't break if the parameter is not provided.
    setisUserFreelancer(useHireHelpingHandAs === "freelancer");
  }, []);

  //console.log("isUserFreelancer on top = ", isUserFreelancer);
  return (
    <Fragment>
      <Header
        loggedInUserInfo={loggedInUserInfo}
        isUserFreelancer={isUserFreelancer}
        setisUserFreelancer={setisUserFreelancer}
      />
      <Component
        {...pageProps}
        loggedInUserInfo={loggedInUserInfo}
        isUserFreelancer={isUserFreelancer}
        setisUserFreelancer={setisUserFreelancer}
      />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
