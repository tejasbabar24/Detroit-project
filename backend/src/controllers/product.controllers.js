import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.models.js";
import { Category } from "../models/category.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const addProduct = asyncHandler(async (req, res, next) => {
    const { name,description,price,stock,categoryName} = req.body;
    if (
        [name,description,price,stock,categoryName].some((field) =>
            field?.trim() === "")
    ) {
        return next(new ApiError(400, "Please fill out all the required fields before submitting"));
    }
    const category = await Category.findOne({ name:categoryName })

    if(!category) return next(new ApiError(400,"Category not found"))

    const LocalPath = req.file?.path;

    if (!LocalPath) {
        return next(new ApiError(401, "The file was not uploaded. Please try again."));
    }

    const uploaded = await uploadOnCloudinary(LocalPath);

    if (!uploaded) {
        return next(new ApiError(500, "An error occurred while uploading the file. Please try again later."));
    }
    
    const product = await Product.create({
        name,
        description,
        productImage:uploaded.secure_url,
        price,
        stock,
        category:category._id,
        categoryName:category.name,
        owner:req.user._id
    });

    const createdProduct = await Product.findById(product._id);
    
    if (!createdProduct) {
        return next(new ApiError(500, "An error occurred while adding product. Please try again later."));
    }
    
    return res
        .status(200)
        .json(
            new ApiResponse(200, createdProduct, "Product added successfully")
        )
});

const getAllProducts = asyncHandler(async (req, res) => {

    const products = await Product.find();
    if(!products){
        return next(new ApiError(400,"No Products found"))
    }
    return res
        .status(200)
        .json(new ApiResponse(200,  {products} , "Retrived"))


})
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedEmployee = await Product.findByIdAndDelete(id);
  if (!deletedEmployee) {
    return next(new ApiError(400,"Deletion Failed!!...Please try again later"))
  }
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Product deleted"))


})


export {
    addProduct,
    getAllProducts,
    deleteProduct
}