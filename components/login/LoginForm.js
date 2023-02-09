import Input from "../signup/Input";
import axios from "axios";
import { envVars } from "../../Services/envVars";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();

  // initializing state to store signup form data
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
    rMe: false,
  });

  //initialize state to store errormessage while logging in user
  const [loginResponseError, setloginResponseError] = useState("");

  //initialize error dilogue box state
  const [errorBoxState, seterrorBoxState] = useState("hidden");

  function handleLoginFormSubmit(e) {
    e.preventDefault();
    axios
      .post(envVars.BACKEND_API_FOR_LOGGING_IN_USERS, loginFormData)
      .then((response) => {
        localStorage.setItem("token", response.headers["x-auth-token"]);
        //router.push("/");
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        // FIXME: handle 400 and 500 response properly
        //    TODO: provide proper feedback message to user regarding what went wrong

        // FIXME: when server stops for some reason then error.response.status is undefined and its crashing the page

        if (error.response.status === 400) {
          seterrorBoxState("block");
          if (error.response.data === "emailPasswordWrong") {
            setloginResponseError("User with this email does not exist!");
          } else {
            setloginResponseError("");
          }
        }
        if (error.response.status === 500) {
          seterrorBoxState("block");
          setloginResponseError(
            "There is some problem with the server. Kindly report this at 'premsagar9113@gmail.com'"
          );
        }
      });
  }

  function handleChange(e) {
    if (e.target.name === "rMe") {
      setloginFormData({
        ...loginFormData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setloginFormData({
        ...loginFormData,
        [e.target.name]: e.target.value,
      });
    }
  }
  return (
    <>
      {/* div for showing error messages while logging in the user */}
      <div
        className={`bg-red-500 text-white p-4 rounded mt-4 ${errorBoxState}`}
      >
        <p className="font-bold">Error</p>
        <p className="text-sm" id="errorMessage">
          {loginResponseError}
        </p>
      </div>

      {/* login form */}
      <form method="post" onSubmit={handleLoginFormSubmit}>
        <Input
          name="email"
          label="E-Mail"
          type="text"
          placeholder="email"
          handleChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <input id="idrMe" name="rMe" type="checkbox" onChange={handleChange} />
        <label className="ml-2" htmlFor="#idrMe">
          Keep me logged in.
        </label>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded-full text-white px-5 py-3 mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
