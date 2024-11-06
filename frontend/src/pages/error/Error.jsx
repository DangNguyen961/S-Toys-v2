import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 font-mono">404</h1>
        <p className="text-2xl font-semibold mt-4 font-mono">Page Not Found</p>
        <p className="mt-2 text-gray-600 font-mono">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="no-underline font-mono flex justify-center items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] text-gray-800 font-bold border border-transparent rounded-md ease-in-out duration-200 shadow-lg shadow-slate-400/50 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#3caa8e] hover:to-[#2d8f75] hover:text-white transform hover:scale-105 lg:m-0 md:px-6"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
