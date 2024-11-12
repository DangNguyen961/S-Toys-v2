import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      {/* <PayPalScriptProvider deferLoading={true}> */}
      <RouterProvider router={router} />
      {/* </PayPalScriptProvider> */}
      <Toaster position="top-center" />
      <ToastContainer position="top-center" className="font-semibold" />
    </>
  );
};

export default App;
