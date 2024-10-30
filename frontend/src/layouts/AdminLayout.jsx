import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="basis-[20%] h-screen">
        <Sidebar />
      </div>
      <div className="basis-[75%] h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
