import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Sample Product</td>
                <td className="py-2">1</td>
                <td className="py-2">$10.00</td>
                <td className="py-2">$10.00</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
