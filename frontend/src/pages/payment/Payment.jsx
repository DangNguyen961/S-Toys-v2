import React, { useEffect, useState } from "react";
import Checkout from "../../components/Checkout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../slices/cartSlice";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Checkout step1 step2 step3 />
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 drop-shadow-md">
          Payment Method
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-medium font-mono mb-2">
              Select Method
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                checked={paymentMethod === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="paypal"
                className="text-lg text-gray-700 font-medium font-mono"
              >
                PayPal or Credit Card
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-mono py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold text-base rounded-md shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 transform hover:scale-105 active:animate-pulse"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
