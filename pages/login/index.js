import LoginForm from "../../components/login/loginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="border-2 border-gray-300 rounded-lg bg-white p-16 shadow-lg">
        <h1 className="font-bold text-gray-800 text-2xl text-center mb-10">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
// TODO:1. check if the user has verified her email and phone number only then let the user Access thier account
// TODO:2. Check if the login attept is from any malicious location or user then notify the account ower through email
