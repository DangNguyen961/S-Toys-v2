import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full object-cover mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4">johndoe@example.com</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
