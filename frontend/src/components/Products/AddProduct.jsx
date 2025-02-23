import React, { useState } from "react";
import { addProduct } from "../../api/products";

function AddProduct() {
  const [isDisable,setIsDisable] = useState(false)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    vehicletype: "",
    price: "",
    brand:"",
    model: "",
    productId:"",
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({ ...formData, imageFile: file });
    }
  };

  // Drag & Drop Handlers
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({ ...formData, imageFile: file });
    }
  };

  // Function to reset form fields
  const clearForm = () => {
    setFormData({
      category: "",
      title: "",
      vehicletype: "",
      price: "",
      brand:"",
      model: "",
      productId:"",
      imageFile: null,
    });
    setIsDisable(false)
    setImagePreview(null);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisable(true)
    const form = new FormData();
    form.append('name',formData.title)
    form.append('vehicleType',formData.vehicletype)
    form.append('price',formData.price)
    form.append('categoryName',formData.category)
    form.append('model',formData.model)
    form.append('brand',formData.brand)
    form.append('productId',formData.productId)
    form.append('productImage',formData.imageFile)
    try {
      const response = await addProduct(form)    
      if(response.status === 200){
        alert(response.data.message)
        // Clear the form after submission
      clearForm();
    }
   } catch (error) {
    alert(error.response.data.message)
    clearForm()

   }
  };

  return (
    <div className="flex justify-center items-center h-full w-full p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg border-t-4 border-[#FAD02E] h-full overflow-y-auto"
      >
        <h1 className="text-center text-xl font-bold text-[#008080]">Add Product</h1>

        <div className="space-y-4">
          {/* Category Select */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
            >
              <option value="">Select a category</option>
              <option value="Air Filter">Air Filter</option>
              <option value="Oil Filter">Oil Filter</option>
              <option value="Fuel Filter">Fuel Filter</option>
              <option value="Cabin Filter">Cabin Filter</option>
            </select>
          </div>

          {/* Product Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
              placeholder="Enter product title"
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select Vehicle Type</label>
            <select
              name="vehicletype"
              value={formData.vehicletype}
              onChange={handleChange}
              className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
            >
              <option value="">Select a category</option>
              <option value="two wheeler">Two Wheeler</option>
              <option value="three wheeler">Three Wheeler</option>
              <option value="four wheeler">Four Wheeler</option>
            </select>
          </div>

          <div className="flex gap-4">
            {/* Price Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Enter brand name"
              />
            </div>

            {/* Model Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Enter model name"
              />
            </div>
          </div>

          {/* Price & Stock Fields */}

          <div className="flex gap-4">
            {/* ProductId Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Part Number</label>
              <input
                type="text"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Enter part number"
              />
            </div>
            {/* Price Input */}
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border rounded-md p-2 mt-1 focus:border-[#FAD02E] focus:ring-[#FAD02E]"
                placeholder="Enter price"
              />
            </div>

            
          </div>

          {/* Image Upload */}
          <div
            className={`border-2 ${
              dragOver ? "border-[#FAD02E]" : "border-gray-300"
            } border-dashed rounded-md p-4 flex flex-col items-center justify-center text-gray-500`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Uploaded Preview" className="h-24 object-contain" />
            ) : (
              <>
                <p className="text-center text-sm">Drag & drop an image</p>
                <label className="cursor-pointer text-[#008080] font-semibold">
                  Click to upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </>
            )}
          </div>

          {/* Submit & Reset Buttons */}
          <div className="flex gap-4">
            <button
              disabled={isDisable}
              type="submit"
              className={`w-1/2 bg-[#008080] text-white p-2 rounded-md ${isDisable ? 'bg-[#006666]' : 'hover:bg-[#006666]'} transition font-semibold`}
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="w-1/2 bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500 transition font-semibold"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

