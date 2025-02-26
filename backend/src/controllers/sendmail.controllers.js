import nodemailer from "nodemailer";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail (or another SMTP service)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
  
});
const sendEmail = asyncHandler(async (req, res, next) => {

  const { senderName, senderEmail,senderPhone, text } = req.body;

  if (!senderEmail || !senderName || !text || !senderPhone) {
    return next(new ApiError(400, "Please fill out all the required fields before submitting"));
  }
  
 
  const mailOptions = {
    from: senderEmail, // Sender's email (user's input)
    to: process.env.RECEIVER_EMAIL, // Your email to receive messages
    subject: `New Contact Form Submission from ${senderName}`,
    text: `Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\nMessage: ${text}`,
    replyTo: senderEmail, // Allows you to reply directly to the user
  };
  
    const info = await transporter.sendMail(mailOptions)
    if(!info.response){
      return next(new ApiError(500,"", "Failed to send message. Try again later."));
    }
    return res
        .status(200)
        .json(new ApiResponse(200, "", "Form Submitted ! Our agent will contact you soon !!"));
  


  
});

export { sendEmail };
