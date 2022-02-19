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
