import { useState } from "react";
import axios from "axios";
import { envVars } from "../../../Services/envVars";

export default function VerifyCodePage() {
  // FIXME: make sure that user can access this page only if she is logged in
  const [email, setEmail] = useState("psagar712@gmail.com"); // user's email
  const [code, setCode] = useState(""); // verification code entered by user
  const [message, setMessage] = useState(""); // success/failure message
  const [resend, setResend] = useState(false); // true if user clicked "Resend" button
  const [emailChange, setEmailChange] = useState(false); // true if user clicked "Change email" button

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code)
      return setMessage("Please enter verification code sent to your email.");
    try {
      // Send a POST request to the API to verify the code
      const response = await axios.post(
        envVars.BACKEND_API_ENDPOINT_FOR_VERIFYING_EMAIL,
        { email, code }
      );
      if (response.data.success) {
        setMessage("Verification successful!"); // set success message
      } else {
        setMessage(response.data.message); // set error message
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again."); // set error message
    }
  };

  const handleResend = () => {
    setResend(true); // set resend flag to true
  };

  const handleChangeEmail = () => {
    setEmailChange(true); // set emailChange flag to true
  };

  const handleRemoveAccount = () => {
    // Send a DELETE request to the API to remove the user's account
    // FIXME: in axios request, attach jwt token to verify if she is logged in and asking to remove her account only and not someone else's
    axios.delete("/api/remove", { data: { email } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Verify your email</h1>
      <p className="text-gray-600 mb-8">
        Enter the verification code we sent to {email}.
      </p>
      <form onSubmit={handleSubmit} className="w-96">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
        <label htmlFor="code" className="block mb-2 font-medium">
          Verification code
        </label>
        <input
          type="text"
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-8"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
        >
          Submit
        </button>
        {message && <p className="text-red-600 mt-5">{message}</p>}
      </form>
      <div className="mt-8">
        <button onClick={handleResend} className="text-blue-500 underline mr-4">
          Resend email
        </button>
        <button
          onClick={handleChangeEmail}
          className="text-blue-500 underline mr-4"
        >
          Change email
        </button>
        <button
          onClick={handleRemoveAccount}
          className="text-blue-500 underline mr-4"
        >
          Remove My Account
        </button>
      </div>
    </div>
  );
}
