import nodemailer from "nodemailer";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com", // Zoho SMTP Host
  port: 465, // Secure Port for Zoho SMTP
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER, // Zoho Email ID
    pass: process.env.EMAIL_PASS, // Zoho App Password
  },
});
const sendEmail = asyncHandler(async (req, res, next) => {

  const { senderName, senderEmail,senderPhone, text } = req.body;

  if (!senderEmail || !senderName || !text || !senderPhone) {
    return next(new ApiError(400, "Please fill out all the required fields before submitting"));
  }
  
 
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email (user's input)
    to: process.env.RECEIVER_EMAIL, // Your email to receive messages
    subject: `New Contact Form Submission from ${senderName}`,
    text: `Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\nMessage: ${text}`,
    replyTo: senderEmail, // Allows you to reply directly to the user
  };
  
    const response = await transporter.sendMail(mailOptions)
    if(!response || !response.accepted.length){
      return next(new ApiError(500,"", "Failed to send message. Try again later."));
    }
    
    return res
        .status(200)
        .json(new ApiResponse(200, "", "Form Submitted ! Our agent will contact you soon !!"));
  


  
});

export { sendEmail };
