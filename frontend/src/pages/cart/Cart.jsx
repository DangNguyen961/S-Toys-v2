import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import { addToCart, removeItemFromCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const shippingCost = 10.0; // Phí ship cố định

  // Tổng chi phí sản phẩm trong giỏ hàng
  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Tổng chi phí sản phẩm trong giỏ hàng bao gồm phí ship
  const totalCost = itemsTotal + shippingCost;

  const addToCartHandler = async (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-lg my-10 rounded-lg overflow-hidden">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold font-mono text-2xl text-gray-800">
              Shopping Cart
            </h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold font-mono text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold font-mono text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold font-mono text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold font-mono text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty
              <Link className="font-mono ml-1" to="/">
                Go back
              </Link>
            </Message>
          ) : (
            cartItems.map((item) => (
              <div
                className="flex items-center hover:bg-gray-100 transition-colors duration-300 -mx-8 px-6 py-5"
                key={item._id}
              >
                <div className="flex w-2/5">
                  <div className="w-20 h-24">
                    <img
                      className="h-full w-full object-cover rounded"
                      src={item.image}
                      alt="Product"
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold font-mono text-sm">
                      <Link
                        className="font-bold font-mono text-sm no-underline text-[#001b5e] hover:text-[#10b465] transition-colors duration-300"
                        to={`/product/${item._id}`}
                      >
                        {item.name}
                      </Link>
                    </span>
                    <span className="text-[#001b5e] font-mono text-xs">
                      {item.brand}
                    </span>
                    <a
                      onClick={() => removeFromCartHandler(item._id)}
                      className="text-red-600 hover:text-red-800 no-underline cursor-pointer font-mono text-sm transition-transform duration-300 transform hover:scale-105 p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                    className="font-mono border border-gray-300 rounded-md p-2"
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-center font-mono w-1/5 font-semibold text-sm text-gray-800">
                  ${item.price}
                </span>
                <span className="text-center font-mono w-1/5 font-semibold text-sm text-gray-800">
                  ${item.quantity * item.price}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="w-1/4 bg-gray-100 px-8 py-10">
          <h1 className="font-semibold font-mono text-2xl border-b pb-8 text-gray-800">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold font-mono text-sm uppercase text-gray-600">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
            </span>
            <span className="font-semibold font-mono text-sm text-gray-800">
              ${itemsTotal.toFixed(2)}
            </span>
          </div>
          <div>
            <label className="font-medium font-mono inline-block mb-3 text-sm uppercase text-gray-600">
              Shipping
            </label>
            <select className="block p-2 font-mono text-gray-600 w-full text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Standard shipping - ${shippingCost.toFixed(2)}</option>
            </select>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold font-mono justify-between py-6 text-sm uppercase text-gray-600">
              <span>Total cost</span>
              <span className="text-gray-800 font-mono">
                ${totalCost.toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              disabled={cartItems.length === 0}
              onClick={() => navigate("/login?redirect=shipping")}
              className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 font-mono transition-transform duration-300 transform hover:scale-105 font-semibold py-3 text-sm text-white uppercase w-full rounded shadow-lg hover:shadow-xl"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
