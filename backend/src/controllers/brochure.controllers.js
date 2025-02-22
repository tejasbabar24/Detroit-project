import { asyncHandler } from "../utils/asyncHandler.js";
import { Brochure } from "../models/brochure.models.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const dowloadBrochure = asyncHandler(async (req,res,next) =>{
    const {name} = req.body;

    const existBrochure = await Brochure.findOne({
        name
    })
    if(existBrochure){
        return next(new ApiError(400,`Brochure already exists with ${name} name`))
    }

    const LocalPath = req.file?.path

    if (!LocalPath) {
        return next(new ApiError(401, "The file was not uploaded. Please try again."));
    }

    const uploaded = await uploadOnCloudinary(LocalPath);

    if (!uploaded) {
        return next(new ApiError(500, "An error occurred while uploading the file. Please try again later."));
    }

    const brochure = await Brochure.create({
        name,
        document:uploaded.secure_url
    })

    const createdBrochure = await Brochure.findById(brochure._id)

    if (!createdBrochure) {
        return next(new ApiError(500, "An error occurred while adding brochure. Please try again later."));
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, createdBrochure, "Brochure added successfully")
    )
})

const deleteBrochure = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBrochure = await Brochure.findByIdAndDelete(id);
  if (!deletedBrochure) {
    return next(new ApiError(400,"Deletion Failed!!...Please try again later"))
  }
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Brochure deleted"))


})

const getBrochures = asyncHandler(async (req, res) => {

    const brochures = await Brochure.find();
    if(!brochures){
        return next(new ApiError(400,"No brochures found"))
    }
    return res
        .status(200)
        .json(new ApiResponse(200,  {brochures} , "Retrieved"))


})
export {
    dowloadBrochure,
    deleteBrochure,
    getBrochures
}