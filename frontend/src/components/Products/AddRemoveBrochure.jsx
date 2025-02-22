import React, { useState } from "react";

function AddRemoveBrochure() {
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [brochureName, setBrochureName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragging, setDragging] = useState(false);

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
      alert(`Product ID ${selectedProduct} has been removed.`);
      setProducts(products.filter((product) => product.id !== selectedProduct));
      setSelectedProduct(""); // Clear selection
    } else {
      alert("Please select a product to remove.");
    }
  };

  // Handle File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    validateAndSetFile(file);
  };

  // Handle Drag & Drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  // Validate File
  const validateAndSetFile = (file) => {
    if (file && (file.type.includes("image") || file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setUploadedFile(file);
    } else {
      alert("Only images, PDFs, and DOCX files are allowed.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center min-h-screen w-full p-6 gap-6 bg-gray-50">
      
      {/* Remove Brochure Form */}
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg flex-grow h-full border-t-4 border-red-500">
        <h1 className="text-center text-2xl font-semibold text-red-600">Remove Brochure</h1>
        <div className="space-y-4 mt-4">
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
          <div className="flex items-center gap-4 p-4 border rounded-md bg-gray-100">
            {selectedProduct ? (
              <>
                <img
                  src={products.find((p) => p.id === selectedProduct)?.img}
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-gray-700 font-medium">
                  {products.find((p) => p.id === selectedProduct)?.name}
                </span>
              </>
            ) : (
              <span className="text-gray-500 text-sm">No product selected</span>
            )}
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={handleDelete}
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition font-semibold"
          >
            Remove Brochure
          </button>
        </div>
      </form>

      {/* Upload Brochure Form */}
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg flex-grow h-full border-t-4 border-blue-500">
        <h1 className="text-center text-2xl font-semibold text-blue-600">Upload Brochure</h1>

        <div className="space-y-4 mt-4">
          {/* Brochure Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Enter Brochure Name</label>
            <input
              type="text"
              value={brochureName}
              onChange={(e) => setBrochureName(e.target.value)}
              placeholder="Enter brochure name"
              className="border rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Drag & Drop Upload */}
          <div
            className={`border-dashed border-2 p-6 rounded-md flex flex-col items-center justify-center ${
              dragging ? "border-blue-600 bg-blue-100" : "border-gray-400 bg-gray-50"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <input type="file" accept="image/*,.pdf,.docx" onChange={handleFileUpload} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="cursor-pointer text-gray-600">
              Drag & Drop files here or <span className="text-blue-600 font-semibold">Browse</span>
            </label>
            {uploadedFile && (
              <div className="mt-4 text-center">
                {uploadedFile.type.includes("image") ? (
                  <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" className="w-24 h-24 object-cover rounded-md shadow-md" />
                ) : (
                  <p className="text-gray-700">{uploadedFile.name}</p>
                )}
                <button
                  type="button"
                  onClick={() => setUploadedFile(null)}
                  className="text-red-600 mt-2 hover:underline"
                >
                  Remove File
                </button>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Upload Brochure
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRemoveBrochure;
