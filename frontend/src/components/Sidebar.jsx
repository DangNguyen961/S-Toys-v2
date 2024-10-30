import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#74CEB7] text-black font-mono font-semibold w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out">
      <h2 className="text-2xl font-mono font-extrabold ml-[18px]">
        Admin Panel
      </h2>
      <nav>
        <Link
          to="/admin/users"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#3caa8e] hover:text-white"
        >
          Users
        </Link>
        <Link
          to="/admin/product"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#3caa8e] hover:text-white"
        >
          Product
        </Link>
        <Link
          to="/login"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#3caa8e] hover:text-white"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
