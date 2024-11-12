import { Link, useParams } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} from "../../slices/orderApiSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Order = () => {
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);
  console.log(order);

  const { userInfo } = useSelector((state) => state.auth);
  const [payOrder, { isLoading: loadingPayPal }] = usePayOrderMutation();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const {
    data: paypal,
    isLoading: loadingPaypal,
    error: errorPayPal,
  } = useGetPayPalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal && paypal.clientId) {
      // Kiểm tra paypal có giá trị và có clientId không để load script paypal
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
      } catch (error) {
        toast.error(error.data.message || error.error);
      }
    });
  }

  function onError(error) {
    toast.error(error.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" />
  ) : (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 font-mono">
        Order #{order._id}
      </h1>

      <div className="space-y-8">
        {/* Shipping Information */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-mono">
            Shipping Information
          </h2>
          <p className="font-mono">
            <strong>Name:</strong> {order.user.name}
          </p>
          <p className="font-mono">
            <strong>Address:</strong> {order.shippingAddress.address},{" "}
            {order.shippingAddress.city}, {order.shippingAddress.postalCode},{" "}
            {order.shippingAddress.country}
          </p>
          <p className="font-mono">
            <strong>Email:</strong> {order.user.email}
          </p>
        </div>

        {/* Delivery Status */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-3 font-mono">
            Delivery Status
          </h2>
          {order.isDelivered ? (
            <Message variant="success">
              Delivered on {order.deliveredAt}
            </Message>
          ) : (
            <Message variant="danger">Not Delivered</Message>
          )}
        </div>

        {/* Payment Method */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Payment Method
          </h2>
          <p className="font-mono">
            <strong>Method:</strong> {order.paymentMethod}
          </p>
          {order.isPaid ? (
            <Message variant="success">Paid on {order.paidAt}</Message>
          ) : (
            <Message variant="danger">Not Paid</Message>
          )}
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white p-4 rounded-md shadow mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 font-mono">
          Order Items
        </h2>
        {order.orderItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="text-gray-700 font-mono">
                {item.name} ({item.quantity} x ${item.price})
              </span>
            </div>
            <p className="text-gray-700 font-mono">
              ${item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white p-4 rounded-md shadow mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 font-mono">
          Order Summary
        </h2>
        <div className="grid grid-cols-2 gap-y-3 text-gray-700">
          <p className="font-mono">Items:</p>
          <p className="text-right font-mono">${order.itemsPrice}</p>
          <p className="font-mono">Shipping:</p>
          <p className="text-right font-mono">${order.shippingPrice}</p>
          <p className="font-mono">Tax:</p>
          <p className="text-right font-mono">${order.taxPrice}</p>
          <p className="font-semibold font-mono">Total:</p>
          <p className="font-semibold text-right font-mono">
            ${order.totalPrice}
          </p>
        </div>
      </div>

      {/* Confirm Order Button */}
      <div className="mt-8">
        {!order.isPaid && (
          <div>
            {loadingPayPal && <Loader />}

            {isPending ? (
              <Loader />
            ) : (
              <div>
                <div className="ml-12">
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  ></PayPalButtons>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
