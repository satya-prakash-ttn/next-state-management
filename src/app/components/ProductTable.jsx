import React from "react";

const ProductTable = ({ products, dispatch }) => {
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  return (
   
    <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="text-center">
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2">{product.description}</td>
            <td className="border px-4 py-2">{product.category}</td>
            <td className="border px-4 py-2">${product.price}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
};

export default ProductTable;
