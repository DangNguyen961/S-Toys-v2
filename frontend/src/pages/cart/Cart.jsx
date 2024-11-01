import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-lg my-10 rounded-lg overflow-hidden">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-gray-800">
              Shopping Cart
            </h1>
            <h2 className="font-semibold text-2xl text-gray-600">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>

          <div className="flex items-center hover:bg-gray-100 transition-colors duration-300 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24 object-cover rounded"
                  src="https://via.placeholder.com/150"
                  alt="Product"
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Product Name</span>
                <span className="text-red-500 text-xs">Product Brand</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-600 text-gray-500 text-xs transition-colors duration-300"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <button className="fill-current text-gray-600 w-3 focus:outline-none">
                <svg viewBox="0 0 448 512">
                  <path d="M32 224c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H64c-17.7 0-32 14.3-32 32z" />
                </svg>
              </button>
              <input
                className="mx-2 border text-center w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value="1"
              />
              <button className="fill-current text-gray-600 w-3 focus:outline-none">
                <svg viewBox="0 0 448 512">
                  <path d="M416 272c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32z" />
                </svg>
              </button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm text-gray-800">
              $10.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-gray-800">
              $10.00
            </span>
          </div>

          {/* Thêm nhiều sản phẩm nếu cần */}
        </div>

        <div className="w-1/4 bg-gray-100 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8 text-gray-800">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase text-gray-600">
              Items 3
            </span>
            <span className="font-semibold text-sm text-gray-800">$30.00</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase text-gray-600">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase text-gray-600"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors duration-300 px-5 py-2 text-sm text-white uppercase rounded">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase text-gray-600">
              <span>Total cost</span>
              <span className="text-gray-800">$40.00</span>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-300 font-semibold py-3 text-sm text-white uppercase w-full rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
