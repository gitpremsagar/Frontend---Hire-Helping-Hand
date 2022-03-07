import SignupForm from "../../components/signup/SignupForm";

export default function signupPage() {
  return (
    <div className="p-20 ">
      <div className="max-w-[800px] bg-gray-900 mx-auto p-20 border-2 border-gray-300 rounded-2xl ">
        <h1 className="text-center font-bold text-4xl text-white mb-20">
          Sign Up for Free
        </h1>
        <SignupForm className="text-white" />
      </div>
    </div>
  );
}
