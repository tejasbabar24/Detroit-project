import React, { useEffect, useState } from "react";
import { addBrochure, deleteBrochure, getBrochures } from "../../api/brochure";

function AddRemoveBrochure() {
  const [isDisable,setIsDisable] = useState(false)
  const [selectedBrochure, setSelectedBrochure] = useState("");
  const [brochureName, setBrochureName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [brochures,setBrochures] = useState([])

  // Sample Products Data
  
  const clearForm = () => {
    setSelectedBrochure("");
   };
   const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    setIsDisable(true)
    formData.append('name',brochureName)
    formData.append('document',uploadedFile)
  
    try {
      const response = await addBrochure(formData)
      if(response.status === 200){
        alert(response.data.message)
        // Clear the form after submission
        clearAddForm();
        }
    } 
    catch (error) {
        alert(error.response.data.message)
        clearAddForm();
    }
  }
  useEffect(()=>{
      const fetchBrochures = async ()=>{
        const response = await getBrochures();
        setBrochures(response.data.data.brochures);
      }
      fetchBrochures()
    },[handleSubmit])
  // Handle Delete Product
  const handleDelete = async () => {
     if (selectedBrochure) {
         try {
         const response = await deleteBrochure(selectedBrochure)
         if(response.status === 200){
           alert(response.data.message)
           setBrochures((prev)=> prev.filter((item)=> item._id !== selectedBrochure))
           clearForm()
         }
         } catch (error) {
           alert(error.response.data.message)
           clearForm()
         }
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

const clearAddForm = () =>{
  setBrochureName("")
  setUploadedFile(null)
  setIsDisable(false)
}



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
              value={selectedBrochure}
              onChange={(e) => setSelectedBrochure(e.target.value)}
              className="border rounded-md p-2 mt-1 focus:border-red-500 focus:ring-red-500"
            >
              <option value="">Choose a brochure</option>
              {brochures
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Product Preview */}
          <div className="flex items-center gap-4 p-4 border rounded-md bg-gray-100">
            {selectedBrochure ? (
              <>
                <img
                  src={brochures.find((item) => item.id === selectedBrochure)?.document}
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-gray-700 font-medium">
                  {brochures.find((item) => item.id === selectedBrochure)?.name}
                </span>
              </>
            ) : (
              <span className="text-gray-500 text-sm">No brochure selected</span>
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
      <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg flex-grow h-full border-t-4 border-blue-500">
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
          disabled={isDisable}
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
