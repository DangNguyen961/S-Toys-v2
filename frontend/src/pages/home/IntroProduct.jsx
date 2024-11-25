import Product from "../../components/Product.jsx";
import { useGetProductsQuery } from "../../slices/productsApiSlice.js";
import Loader from "../../components/Loader.jsx";
import Message from "../../components/Message.jsx";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate.jsx";

const IntroProduct = () => {
  const { keyword, pageNumber } = useParams();
  const { data, error, isLoading } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <div className="mb-12 mt-8 px-4">
      <div className="font-mono text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="zoom-in" className="text-5xl font-bold text-[#001b5e]">
          Our Products
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
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
            {data.products.map((product, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay={(index + 1) * 100}
                key={product._id}
                className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:rotate-1 hover:scale-105 hover:brightness-110"
              >
                <Product product={product} />
              </div>
            ))}
          </div>

          <div
            className="mt-8"
            data-aos="zoom-in-down"
            data-aos-delay={data.aosDelay}
          >
            <Paginate
              pages={data.pages}
              page={data.page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default IntroProduct;
