import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex w-full max-w-3xl space-x-4">
        {/* Step 1 - Login */}
        <div className="flex-1 text-center">
          {step1 ? (
            <Link className="no-underline" to="/login">
              <div className="font-mono flex items-center justify-center bg-[#10b465] text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-200 hover:bg-green-600">
                Login
              </div>
            </Link>
          ) : (
            <div className="font-mono flex items-center justify-center bg-gray-300 text-gray-500 font-semibold px-4 py-2 rounded-full cursor-default shadow-md">
              Login
            </div>
          )}
        </div>

        {/* Step 2 - Shipping */}
        <div className="flex-1 text-center">
          {step2 ? (
            <Link className="no-underline" to="/shipping">
              <div className="font-mono flex items-center justify-center bg-[#10b465] text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-200 hover:bg-green-600">
                Shipping
              </div>
            </Link>
          ) : (
            <div className="flex items-center justify-center bg-gray-300 text-gray-500 font-semibold px-4 py-2 rounded-full cursor-default shadow-md">
              Shipping
            </div>
          )}
        </div>

        {/* Step 3 - Payment */}
        <div className="flex-1 text-center">
          {step3 ? (
            <Link className="no-underline" to="/payment">
              <div className="font-mono flex items-center justify-center bg-[#10b465] text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-200 hover:bg-green-600">
                Payment
              </div>
            </Link>
          ) : (
            <div className="font-mono flex items-center justify-center bg-gray-300 text-gray-500 font-semibold px-4 py-2 rounded-full cursor-default shadow-md">
              Payment
            </div>
          )}
        </div>

        {/* Step 4 - Place Order */}
        <div className="flex-1 text-center">
          {step4 ? (
            <Link className="no-underline" to="/order">
              <div className="font-mono flex items-center justify-center bg-[#10b465] text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-200 hover:bg-green-600">
                Order
              </div>
            </Link>
          ) : (
            <div className="font-mono flex items-center justify-center bg-gray-300 text-gray-500 font-semibold px-4 py-2 rounded-full cursor-default shadow-md">
              Order
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
