import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { toast } from "react-toastify";

const ProductListScreen = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteProduct(id).unwrap();
        toast.success("Deleted successfully!");
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await createProduct().unwrap();
        toast.success("Product created successfully!");
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-mono text-gray-800">Products</h1>
        <button
          onClick={createProductHandler}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition duration-200"
        >
          <FaPlus />
          <span className="font-mono">Create Product</span>
        </button>
      </div>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message}</Message>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-6 text-left font-mono font-semibold">
                  ID
                </th>
                <th className="py-3 px-6 text-left font-mono font-semibold">
                  Name
                </th>
                <th className="py-3 px-6 text-left font-mono font-semibold">
                  Price
                </th>
                <th className="py-3 px-6 text-left font-mono font-semibold">
                  Category
                </th>
                <th className="py-3 px-6 text-left font-mono font-semibold">
                  Brand
                </th>
                <th className="py-3 px-6 text-center font-mono font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-100 transition duration-150"
                >
                  <td className="py-4 px-6 font-mono">{product._id}</td>
                  <td className="py-4 px-6 font-mono">{product.name}</td>
                  <td className="py-4 px-6 font-mono">${product.price}</td>
                  <td className="py-4 px-6 font-mono">{product.category}</td>
                  <td className="py-4 px-6 font-mono">{product.brand}</td>
                  <td className="py-4 px-6 flex justify-center gap-4">
                    <Link to={`/admin/product/${product._id}/edit`}>
                      <button className="text-blue-600 bg-blue-100 hover:bg-blue-500 hover:text-white p-2 rounded-full transition duration-200 ease-in-out transform hover:scale-105 shadow-md">
                        <FaEdit className="w-4 h-4" />
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteHandler(product._id)}
                      className="text-red-600 bg-red-100 hover:bg-red-500 hover:text-white p-2 rounded-full transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
                    >
                      <FaTrash className="w-4 h-4" />
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

export default ProductListScreen;
