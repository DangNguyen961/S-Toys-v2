import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
import { Link } from "react-router-dom";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-mono text-gray-800 mb-6">
        Orders
      </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  ID
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  USER
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  DATE
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  TOTAL
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  PAID
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  DELIVERED
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4 font-mono text-gray-700">{order._id}</td>
                  <td className="p-4 font-mono text-gray-700">
                    {order.user && order.user.name}
                  </td>
                  <td className="p-4 font-mono text-gray-700">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="p-4 font-mono text-gray-700">
                    ${order.totalPrice}
                  </td>
                  <td className="p-4 font-mono text-gray-700">
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                  <td className="p-4 font-mono text-gray-700">
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                  <td className="p-4">
                    <Link to={`/order/${order._id}`}>
                      <button className=" font-mono bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
