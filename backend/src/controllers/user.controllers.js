import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
}

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        return next(new ApiError(500, "An error occurred while generating the access and refresh tokens. Please try again later."));
    }
}

const registerUser = asyncHandler(async (req, res, next) => {
    const { role, email, password } = req.body;

    if (
        [ role, email, password].some((field) =>
            field?.trim() === "")
    ) {
        return next(new ApiError(400, "Please fill out all the required fields before submitting"));
    }

    const existedUser = await User.findOne({
        email
    })

    if (existedUser) {
        return next(new ApiError(409, "An account with this email or username already exists. Please use a different one."));
    }

    const user = await User.create({
        email,
        role,
        password
    })

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {
        return next(new ApiError(500, "An error occurred while registering the user. Please try again later"));
    }

    return res.status(201)
              .cookie("accessToken", accessToken, options)
              .cookie("refreshToken", refreshToken, options)           
              .json(new ApiResponse(200, createdUser, "User registered successfully! Welcome aboard!")
    )

});

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    
    if (!(email)) {
        return next(new ApiError(400, "Please provide a username or email."))
    }

    const user = await User.findOne({
       email
    })

    if (!user) {
        return next(new ApiError(404, "No user found. Please provide valid credentials"))
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        return next(new ApiError(401, "Invalid User Credentials"));
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in successfully! Welcome back!")
        )

})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, req.user, "Current User Fetched Successfully"));
})
const logOutUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )


    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully. See you next time!"));
})

export {
    registerUser,
    loginUser,
    logOutUser,
    getCurrentUser
}
