import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";
  console.log("🚀 ~ RootLayout ~ isLoginPage:", isLoginPage);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
