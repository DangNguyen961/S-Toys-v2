import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderList = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteUser(id);
        refetch();
        toast.success("Deleted successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-mono text-gray-800 mb-6">Users</h1>
      {loadingDelete && <Loader />}
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
                  NAME
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  EMAIL
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700">
                  ADMIN
                </th>
                <th className="p-4 text-left font-mono font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4 font-mono text-gray-700">{user._id}</td>
                  <td className="p-4 font-mono text-gray-700">{user.name}</td>
                  <td className="p-4 font-mono text-gray-700">
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td className="p-4 font-mono text-gray-700">
                    {user.isAdmin ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                  <td className="p-4">
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <button className=" font-mono bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteHandler(user._id)}
                      className="ml-2 font-mono bg-gradient-to-r from-red-400 to-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-red-500 hover:to-red-600 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                      <FaTrash />
                    </button>
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
