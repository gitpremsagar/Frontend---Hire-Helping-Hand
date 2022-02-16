import Input from "./Input";
import { useState } from "react";
import { envVars } from "../../Services/envVars";
import axios from "axios";

export default function SignupForm() {
  // initializing state to store signup form data
  const [signupFormData, setsignupFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    tAndC: false,
  });

  function handleSignupFormSubmit(e) {
    e.preventDefault();
    //console.log(signupFormData);
    axios
      .post(envVars.BACKEND_API_FOR_USERS, signupFormData)
      .then((response) => {
        console.log("Response = ", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    if (e.target.name === "tAndC") {
      setsignupFormData({
        ...signupFormData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setsignupFormData({
        ...signupFormData,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <form method="POST" onSubmit={handleSignupFormSubmit}>
      <Input
        name="firstname"
        label="Firstname"
        type="text"
        placeholder="Firstname"
        handleChange={handleChange}
      />
      <Input
        name="lastname"
        label="Lastname"
        type="text"
        placeholder="Lastname"
        handleChange={handleChange}
      />
      <Input
        name="email"
        label="E-mail"
        type="email"
        placeholder="E-mail"
        handleChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
        handleChange={handleChange}
      />
      <Input
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        handleChange={handleChange}
      />

      <input id="tnadc" name="tAndC" type="checkbox" onChange={handleChange} />
      <label className="ml-2" htmlFor="#tandc">
        I accept terms and conditions
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
