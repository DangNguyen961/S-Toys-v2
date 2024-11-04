import { data } from "autoprefixer";
import Product from "../../components/Product.jsx";
import { useGetProductsQuery } from "../../slices/productsApiSlice.js";
import Loader from "../../components/Loader.jsx";
import Message from "../../components/Message.jsx";

const IntroProduct = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  return (
    <div className="mb-12 px-4">
      <div className="font-mono text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-5xl font-bold text-[#001b5e]">
          Our Products
        </h1>
        <p
          data-aos="fade-up"
          className="font-semibold text-lg text-gray-600 mt-2"
        >
          A selection of unique items for you
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
            {products.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={product._id}
                className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        </>
      )}

      <div data-aos="fade-up" className="flex justify-center "></div>
    </div>
  );
};

export default IntroProduct;
