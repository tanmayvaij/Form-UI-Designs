import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      id="forgotpassword"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">
        <i className="text-4xl text-pink-500 fa-solid fa-circle-exclamation"></i>

        <h1 className="text-2xl">Forgot Password</h1>

        <p className="w-60 text-sm text-gray-500">
          Enter your email and we'll send you a link to reset your password
        </p>

        <div>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none"
            placeholder="Type your email"
          />
        </div>

        <div className="w-full">
          <button className="bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full">
            Submit
          </button>
        </div>

        <p className="text-sm">
          <Link
            className="pl-4 underline text-blue-400 hover:text-blue-600"
            to="/"
          >
            {" "}
            &lt; Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
