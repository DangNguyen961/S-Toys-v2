import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-mono font-bold mb-4">Register</h2>
        <form>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold font-mono mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 font-mono rounded-md px-4 py-2 mb-2"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold font-mono mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md font-mono px-4 py-2 mb-2"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold font-mono mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md font-mono px-4 py-2 mb-2"
            />
          </div>
          <button
            onClick={handleRegister}
            className="font-mono flex justify-center w-full items-center gap-2 py-2 px-4 bg-[#74CEB7] text-gray-800 font-bold border rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-[#3caa8e] hover:text-white lg:m-0 md:px-6"
          >
            Register
          </button>
          <div className="mt-4">
            <p className="text-sm font-mono text-gray-600">
              Don't have an account?
              <Link
                to="/login"
                className="text-[#74CEB7] font-mono hover:text-[#3caa8e] ml-1"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
