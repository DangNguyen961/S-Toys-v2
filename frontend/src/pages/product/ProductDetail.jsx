import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../slices/productsApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { addToCart } from "../../slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();

  const {
    data: product,
    error,
    isLoading,
    refetch,
  } = useGetProductDetailsQuery(productId);

  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Added to cart successfully!");
  };

  const [createReview, { isLoading: loadingReview }] =
    useCreateReviewMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        comment,
      }).unwrap();
      refetch();
      setComment("");
      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error(error.data.message || error.error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <Link to="/" className="no-underline">
        <button className="my-3 font-mono flex justify-center items-center gap-2 py-2 px-6 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] text-gray-800 font-bold rounded-md transition duration-300 shadow-lg hover:shadow-xl hover:from-[#3caa8e] hover:to-[#2d8f75] hover:text-white transform hover:scale-105">
          Go Back
        </button>
      </Link>

      {/* Loader and Error Handling */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 w-full object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <h3 className="font-mono text-2xl font-semibold text-[#001b5e]">
                {product.name}
              </h3>
              <p className="font-mono text-gray-700">{product.description}</p>
              <p className="font-mono text-lg text-[#10b465] font-semibold">
                Price: ${product.price}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 bg-white shadow-lg p-6 rounded-lg flex-none min-w-[300px] h-64 overflow-hidden">
              <div className="flex items-center">
                <strong className="font-mono text-gray-800">Price:</strong>
                <p className="font-mono text-[#10b465] ml-2 mb-0">
                  ${product.price}
                </p>
              </div>
              <div className="flex items-center">
                <strong className="font-mono text-gray-800">Status:</strong>
                <p
                  className={`font-mono ml-2 mb-0 ${
                    product.countInStock > 0 ? "text-[#10b465]" : "text-red-500"
                  }`}
                >
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              {product.countInStock > 0 && (
                <div className="flex items-center gap-4">
                  <strong className="font-mono text-gray-800">Quantity:</strong>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="font-mono border border-gray-300 rounded-md p-2"
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                disabled={product.countInStock === 0}
                type="button"
                onClick={addToCartHandler}
                className={`mt-4 font-mono flex justify-center items-center gap-2 py-2 px-4 font-bold text-gray-800 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] rounded-md shadow-lg transition-transform duration-200 ease-in-out hover:shadow-xl hover:scale-105 hover:from-[#3caa8e] hover:to-[#2d8f75] ${
                  product.countInStock === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 space-y-6">
            {/* Reviews */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-mono text-xl font-bold text-gray-800 mb-4">
                Reviews
              </h2>
              {product.reviews.length === 0 ? (
                <Message>No Reviews</Message>
              ) : (
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div
                      key={review._id}
                      className="p-4 border rounded-lg shadow-sm bg-gray-50"
                    >
                      <strong className="font-mono text-lg font-semibold text-gray-800 block mb-2">
                        {review.name}
                      </strong>
                      <p className="font-mono text-sm text-gray-500 mb-2">
                        {review.createdAt.substring(0, 10)}
                      </p>
                      <p className="font-mono text-gray-700">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Write Review */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-mono text-xl font-bold text-gray-800 mb-4">
                Write a Review
              </h2>
              {loadingReview && <Loader />}
              {userInfo ? (
                <form onSubmit={submitHandler} className="space-y-4">
                  <div>
                    <label
                      htmlFor="comment"
                      className="font-mono block text-sm font-semibold text-gray-700"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows="4"
                      placeholder="Write your review here..."
                      className="font-mono w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loadingReview}
                    className="font-mono w-full bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold p-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <Message>
                  Please{" "}
                  <Link
                    to="/login"
                    className="font-mono text-blue-500 underline hover:text-blue-600"
                  >
                    sign in
                  </Link>{" "}
                  to write a review.
                </Message>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
