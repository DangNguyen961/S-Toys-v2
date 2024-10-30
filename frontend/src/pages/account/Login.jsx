import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-mono font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold font-mono mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border font-mono rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-mono text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="font-mono shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="font-mono flex justify-center items-center gap-2 py-2 px-4 bg-[#74CEB7] text-gray-800 font-bold border  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-[#3caa8e] hover:text-white lg:m-0 md:px-6"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold font-mono text-sm ml-1 text-[#74CEB7] hover:text-[#3caa8e]"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-4">
            <p className="text-sm font-mono text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-[#74CEB7] hover:text-[#3caa8e] font-mono ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
