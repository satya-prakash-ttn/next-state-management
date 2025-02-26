import React, { useRef, useState } from "react";

const ProductForm = ({ dispatch, products }) => {

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  

  const [message, setMessage] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: products.length + 1,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: parseFloat(priceRef.current.value),
    };


    dispatch({ type: "ADD_PRODUCT", payload: newProduct });

   
    setMessage(`Product "${newProduct.title}" added successfully!`);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    priceRef.current.value = "";

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <form onSubmit={addProduct} className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Add a Product</h3>

      <input ref={titleRef} type="text" placeholder="Title" className="border p-2 w-full mb-2" required />
      <input ref={descriptionRef} type="text" placeholder="Description" className="border p-2 w-full mb-2" required />
      <input ref={categoryRef} type="text" placeholder="Category" className="border p-2 w-full mb-2" required />
      <input ref={priceRef} type="number" placeholder="Price" className="border p-2 w-full mb-2" required />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </form>
  );
};

export default ProductForm;
