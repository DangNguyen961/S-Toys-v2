import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProducts();
  }, [productId]);

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="no-underline">
        <button className="my-3 font-mono flex justify-center items-center gap-2 py-2 px-6 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] text-gray-800 font-bold rounded-md transition duration-300 shadow-lg hover:shadow-xl hover:from-[#3caa8e] hover:to-[#2d8f75] hover:text-white transform hover:scale-105">
          Go Back
        </button>
      </Link>
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
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 bg-white shadow-lg p-6 rounded-lg flex-none min-w-[300px]">
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
          <button
            disabled={product.countInStock === 0}
            className={`font-mono flex justify-center items-center gap-2 py-2 px-4 font-bold text-gray-800 bg-gradient-to-r from-[#74CEB7] to-[#3caa8e] rounded-md shadow-lg transition-transform duration-200 ease-in-out hover:shadow-xl hover:scale-105 hover:from-[#3caa8e] hover:to-[#2d8f75] ${
              product.countInStock === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
