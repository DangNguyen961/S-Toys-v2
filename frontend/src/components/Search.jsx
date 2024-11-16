import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [searchVisible, setSearchVisible] = useState(false);
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleSearch}
        className="px-3 py-2 rounded-md bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold shadow-lg hover:from-teal-300 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
      >
        {searchVisible ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-search"></i>
        )}
      </button>

      <div
        className={`flex items-center transition-all duration-300 ml-2 ${
          searchVisible ? "w-64 opacity-100" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <form onSubmit={submitHandler} className="relative w-full">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-md hover:from-teal-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 
             transition duration-300 ease-in-out"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
