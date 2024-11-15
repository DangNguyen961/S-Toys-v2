import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} from "../../slices/usersApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditUser = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success("Updated successfully");
      refetch();
      navigate("/admin/userlist");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="p-6 font-mono">
      <Link to="/admin/userlist">
        <button className="text-blue-500 font-semibold bg-blue-100 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-200 transform hover:scale-105 hover:shadow-md mb-4">
          &larr; Go Back
        </button>
      </Link>

      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Edit User
        </h1>

        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"}>{error}</Message>
        ) : (
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="number"
                id="price"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter price"
              />
            </div>

            <form
              id="isAdmin"
              label="Is Admin"
              type="checkbox"
              checked={isAdmin}
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.value)}
            >
              <label
                htmlFor="isAdmin"
                className="block text-sm font-medium text-gray-700"
              >
                Is Admin
              </label>
              <input
                id="isAdmin"
                label="Is Admin"
                type="checkbox"
                checked={isAdmin}
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              />
            </form>
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 text-white font-semibold py-2 rounded-md shadow-lg hover:bg-green-600 transition duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditUser;
