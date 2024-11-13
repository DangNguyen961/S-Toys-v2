import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.isAdmin ? (
    <div>
      <Header />
      <main className="container mx-auto my-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminLayout;
