import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log("login successful", user);
        toast.success("Login successful! Welcome back.");
        navigate("/");
      })
      .catch((error) => {
        console.error("login failed", error);
        toast.error("Login failed! Please check your credentials.");
      });
  };

  return (
    <div className="p-10 bg-gradient-to-tl from-blue-500 via-teal-300 to-amber-400 items-center">
      <div
        className="relative  mx-auto overflow-hidden w-64  rounded shadow flex flex-col justify-between p-3 after:absolute after:w-24 after:h-24 after:bg-sky-300 after:-z-10 after:rounded-full after:-top-4 after:-right-4 after:blur-xl border after:[box-shadow:-150px_50px_10px_100px_#7dd3fc]"
        id="login"
      >
        <div className="space-y-2">
          <a
            className="border border-sky-500 bg-sky-50 hover:bg-sky-100 rounded text-sky-500 p-2 font-bold flex flex-row gap-3 justify-center"
            href="#"
          >
            <span>Log in with</span>
            <FaGoogle size={20} />
          </a>
          <a
            className="border border-sky-500 bg-sky-50 hover:bg-sky-100 rounded text-sky-500 p-2 font-bold flex flex-row gap-3 justify-center"
            href="#"
          >
            <span>Log in with</span>
            <FaFacebook size={20} />
          </a>
        </div>
        <span className="text-center text-xl font-bold text-red-600 opacity-50">
          or
        </span>
        <form
          onSubmit={handleSubmit}
          method="post"
          action=""
          className="text-gray-700"
        >
          <label
            htmlFor="email"
            className="text-xs font-bold after:content-['*']"
          >
            Mail
          </label>
          <input
            required
            type="email"
            name="email"
            className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          />
          <label
            htmlFor="password"
            className="text-xs font-bold after:content-['*']"
          >
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          />

          <button className="w-full rounded bg-sky-500 text-sky-50 p-2 text-center font-bold hover:bg-sky-400">
            Log In
          </button>
          <a
            className="block text-start mt-2 text-xs text-red-500 mb-4"
            href="/reg"
          >
            Pleace Registration
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
