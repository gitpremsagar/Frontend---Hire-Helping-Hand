import Input from "../signup/Input";
import axios from "axios";
import { envVars } from "../../Services/envVars";
import { useState } from "react";

export default function LoginForm() {
  // initializing state to store signup form data
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
    rMe: false,
  });

  function handleLoginFormSubmit(e) {
    e.preventDefault();
    // FIXME: use correct api url to post login form
    axios
      .post(envVars.BACKEND_API_FOR_USERS, loginFormData)
      .then((response) => {
        console.log("Response = ", response);
      })
      .catch((error) => {
        if (error.response.status === 400) alert("Bad request");
        if (error.response.status === 500) {
          alert(
            "There is some problem with the server. Kindly report this at 'premsagar9113@gmail.com'"
          );
        }
        console.log(error.response);
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
  );
}
