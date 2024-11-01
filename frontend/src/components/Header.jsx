import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      <nav className="bg-[#10b465]">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center font-bold text-xl text-white font-mono no-underline"
            >
              <img
                src="/image/logo.png"
                alt="S-TOYS Logo"
                className="inline-block h-8 mr-2 rounded-full"
              />
              S-TOYS
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="font-mono flex justify-center items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] text-gray-800 font-bold rounded-md transition duration-200 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[#3caa8e] hover:to-[#2d8f75] hover:text-white transform hover:scale-105"
            >
              {searchVisible ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-search"></i>
              )}
            </button>
            {searchVisible && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-4 p-2 rounded-md font-mono border border-gray-300"
              />
            )}
            <Link
              to="/"
              className="ml-4 font-semibold no-underline font-mono text-lg text-white transition duration-200 ease-in-out relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:text-[#74CEB7]"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="ml-4 font-semibold font-mono no-underline text-lg text-white transition duration-200 ease-in-out relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:text-[#74CEB7]"
            >
              Cart
              <span className="count flex items-center justify-center absolute top-[-6px] right-[-4px] bg-[#ea2b0f] text-white text-xs font-bold rounded-full w-[20px] h-[20px] shadow-md ring-1 hover:scale-110 transform transition duration-200 ease-in-out">
                1
              </span>
            </Link>
            <Link
              to="/login"
              className="ml-4 font-semibold font-mono no-underline text-lg text-white transition duration-200 ease-in-out relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:text-[#74CEB7]"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
