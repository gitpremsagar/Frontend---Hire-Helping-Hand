import SignupForm from "../../components/signup/SignupForm";

export default function signupPage() {
  return (
    <div className="max-w-[800px] bg-gray-100 mx-auto p-10 border-2 border-gray-300 rounded-lg">
      <h1 className="text-center font-bold text-2xl text-gray-800">
        Sign Up for Free
      </h1>
      <SignupForm />
    </div>
  );
}
