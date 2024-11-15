import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-48 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>
      <Link to={`/product/${product._id}`} className="no-underline">
        <h2 className="text-lg cursor-pointer font-mono font-semibold text-[#001b5e] mt-4 transition duration-300 ease-in-out hover:text-[#10b465]">
          {product.name}
        </h2>
      </Link>

      <p className="text-sm font-semibold font-mono text-gray-600 mt-1 transition duration-300 ease-in-out hover:text-[#10b465]">
        ${product.price}
      </p>
      <p className="text-sm font-semibold font-mono text-gray-600 mt-1 transition duration-300 ease-in-out hover:text-[#10b465]">
        {product.numReviews} reviews
      </p>
    </div>
  );
};

export default Product;
