import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-b-4 border-[#10b465] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
