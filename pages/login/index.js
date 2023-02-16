import LoginForm from "../../components/login/loginForm";

export default function LoginPage() {
  return (
    <div className="max-w-[600px] border-2 border-gray-200 rounded mx-auto bg-gray-100 p-10 mt-20">
      <h1 className="font-bold text-gray-800 text-2xl text-center mb-10">
        Login
      </h1>
      <LoginForm />
    </div>
  );
}
// TODO:1. check if the user has verified her email and phone number only then let the user Access thier account
// TODO:2. Check if the login attept is from any malicious location or user then notify the account ower through email
