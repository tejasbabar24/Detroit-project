import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.models.js";


const addCategory = asyncHandler(async (req, res, next) => {
    const { name } = req.body;

    if (
        name.trim() === ""
    ) {
        return next(new ApiError(400, "Please fill out all the required fields before submitting"));
    }

    const existCategory = await Category.findOne({
        name
    })

    if(existCategory){
        return next(new ApiError(400,"Category already exists with same name"))
    }

    const category = await Category.create({
        name
    })
    const createdCategory = await Category.findById(category._id);

    if (!createdCategory) {
        return next(new ApiError(500, "An error occurred while adding the category. Please try again later."));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, createdCategory, "Category added successfully!"));

})

export{
    addCategory
}