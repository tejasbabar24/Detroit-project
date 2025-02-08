import React, { useState } from "react";

function RemoveProduct() {
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  // Sample Products Data
  const [products, setProducts] = useState([
    { id: "101", name: "Laptop", category: "electronics", img: "https://via.placeholder.com/60" },
    { id: "102", name: "Smartphone", category: "electronics", img: "https://via.placeholder.com/60" },
    { id: "103", name: "T-Shirt", category: "fashion", img: "https://via.placeholder.com/60" },
    { id: "104", name: "Book", category: "books", img: "https://via.placeholder.com/60" },
  ]);

  // Handle Delete Product
  const handleDelete = () => {
    if (selectedProduct) {
      console.log(`Deleting Product ID: ${selectedProduct}`);
      alert(`Product ID ${selectedProduct} has been removed.`);
      setProducts(products.filter((product) => product.id !== selectedProduct));
      setSelectedProduct(""); // Clear selection
    } else {
      alert("Please select a product to delete.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full p-4">
      <form className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg border-t-4 border-red-500">
        <h1 className="text-center text-xl font-bold text-red-600">Remove Product</h1>

        <div className="space-y-4">
          {/* Select Category */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-md p-2 mt-1 focus:border-red-500 focus:ring-red-500"
            >
              <option value="">Choose a category</option>
              <option value="Air Filter">Air Filter</option>
              <option value="Oil Filter">Oil Filter</option>
              <option value="Fuel Filter">Fuel Filter</option>
              <option value="Cabin Filter">Cabin Filter</option>
            </select>
          </div>

          {/* Select Product */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select Product</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="border rounded-md p-2 mt-1 focus:border-red-500 focus:ring-red-500"
            >
              <option value="">Choose a product</option>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Product Preview */}
          <div className="flex items-center gap-4 p-3 border rounded-md bg-gray-100">
            {selectedProduct ? (
              <>
                <img
                  src={products.find((p) => p.id === selectedProduct)?.img}
                  alt="Product"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="text-gray-700 font-medium">
                  {products.find((p) => p.id === selectedProduct)?.name}
                </span>
              </>
            ) : (
              <span className="text-gray-500 text-sm">No product selected</span>
            )}
          </div>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDelete}
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition font-semibold"
          >
            Remove Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default RemoveProduct;
