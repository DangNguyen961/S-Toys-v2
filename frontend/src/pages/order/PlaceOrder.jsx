import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message.jsx";
import Checkout from "../../components/Checkout.jsx";
import Loader from "../../components/Loader.jsx";
import { useCreateOrderMutation } from "../../slices/orderApiSlice.js";
import { clearCartItems } from "../../slices/cartSlice.js";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  const orderHandler = async () => {
    try {
      console.log("oke");

      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
      console.log(res);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 font-mono">
        <Checkout step1 step2 step3 step4 />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="p-4 border rounded-lg mb-4 shadow">
              <h2 className="text-xl font-semibold mb-2">Shipping</h2>
              <p className="text-gray-700">
                <strong>Address:</strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city} {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </p>
            </div>

            <div className="p-4 border rounded-lg mb-4 shadow">
              <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
              <p className="text-gray-700">
                <strong>Method:</strong> {cart.paymentMethod}
              </p>
            </div>

            <div className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message variant="danger">Your cart is empty</Message>
              ) : (
                <div>
                  {cart.cartItems.map((item, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded mr-4"
                      />
                      <Link
                        to={`/product/${item._id}`}
                        className="text-[#001b5e] hover:text-[#10b465] no-underline hover:underline"
                      >
                        {item.name}
                      </Link>
                      <div className="ml-auto text-gray-700">
                        {item.quantity} x ${item.price} = $
                        {(item.quantity * item.price).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Items</span>
                  <span>${cart.itemsPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Shipping</span>
                  <span>${cart.shippingPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Tax</span>
                  <span>${cart.taxPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cart.totalPrice}</span>
                </div>
              </div>
              {error && (
                <Message variant="danger" className="mt-4">
                  {error.data.message}
                </Message>
              )}
              <button
                type="button"
                className="w-full mt-6 font-mono py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold text-base rounded-md shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 transform hover:scale-105 active:animate-pulse"
                disabled={cart.cartItems.length === 0}
                onClick={orderHandler}
              >
                Order
              </button>
              {isLoading && <Loader />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
