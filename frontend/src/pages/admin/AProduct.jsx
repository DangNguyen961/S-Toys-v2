import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";

const AProduct = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      image: null,
    });
  };

  const handleEdit = (index) => {
    const productToEdit = products[index];
    setProduct(productToEdit);
    handleDelete(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2 className="text-2xl font-mono font-bold mt-10 mb-6 text-center">
        Add new product
      </h2>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block font-mono text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-mono text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-mono text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-mono text-gray-700">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label className="block font-mono text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full font-mono flex justify-center items-center gap-2 py-2 px-4 bg-[#74CEB7] text-gray-800 font-bold border  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-[#3caa8e] hover:text-white lg:m-0 md:px-6"
          >
            Create Product
          </button>
        </form>
      </div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h2 className="text-2xl font-mono font-bold mt-10 mb-6">
            Product List
          </h2>
        </AccordionHeader>
        <AccordionBody>
          <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Image</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-2 px-4 border-b">{prod.name}</td>
                    <td className="py-2 px-4 border-b">{prod.price}</td>
                    <td className="py-2 px-4 border-b">{prod.category}</td>
                    <td className="py-2 px-4 border-b">{prod.description}</td>
                    <td className="py-2 px-4 border-b">
                      {prod.image && (
                        <img
                          src={URL.createObjectURL(prod.image)}
                          alt={prod.name}
                          className="w-16 h-16 object-cover mx-auto rounded-lg"
                        />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleEdit(index)}
                        className="font-mono flex justify-center items-center gap-2 py-2 px-3 bg-yellow-300 text-gray-800 font-bold border  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-yellow-500 hover:text-white lg:m-0 md:px-6 mb-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="font-mono flex justify-center items-center gap-2 py-2 px-3 bg-red-300 text-gray-800 font-bold border  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-red-500 hover:text-white lg:m-0 md:px-6 mb-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default AProduct;
