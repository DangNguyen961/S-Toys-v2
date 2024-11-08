import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../../slices/cartSlice";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold font-mono text-black mb-6 drop-shadow-md">
        Shipping Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm transition duration-500 hover:shadow-2xl transform hover:scale-105"
      >
        <div className="mb-4">
          <label className="block text-base text-gray-700 font-medium font-mono mb-1">
            Address:
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full font-mono p-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-gray-700 font-medium font-mono mb-1">
            City:
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full font-mono p-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            placeholder="City"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-gray-700 font-medium font-mono mb-1">
            Postal Code:
          </label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full font-mono p-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            placeholder="Postal Code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-gray-700 font-medium font-mono mb-1">
            Country:
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full font-mono p-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            placeholder="Country"
          />
        </div>
        <button
          type="submit"
          className="w-full font-mono py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold text-base rounded-md shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 transform hover:scale-105 active:animate-pulse"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Shipping;
