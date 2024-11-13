import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../../slices/usersApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import { setCredentials } from "../../slices/authSlice";
import { useGetMyOrdersQuery } from "../../slices/orderApiSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Details and Update Form Section */}
      <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Profile Details */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            User Profile
          </h2>
          <p className="text-center font-mono text-gray-700">
            {userInfo?.name}
          </p>
          <p className="text-center font-mono text-gray-500">
            {userInfo?.email}
          </p>
        </div>

        {/* Profile Update Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Update Profile
          </h2>
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label
                className="block text-sm font-bold font-mono text-gray-700 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold font-mono text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold font-mono text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold font-mono text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold p-2 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Update Profile
            </button>

            {loadingUpdateProfile && <Loader />}
          </form>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          My Orders
        </h2>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    ID
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    Date
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    Total
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    Paid
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    Delivered
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-gray-700">
                      {order._id}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {order.createdAt.substring(0, 10)}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      ${order.totalPrice}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      <Link to={`/order/${order._id}`}>
                        <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
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
    </div>
  );
};

export default Profile;
