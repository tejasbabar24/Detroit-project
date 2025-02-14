import {MailtrapClient} from "mailtrap"
import { asyncHandler } from "../utils/asyncHandler.js"
import { log } from "console";

const client = new MailtrapClient({ token: process.env.MAILTRAP_API_TOKEN ,bulk:true});
const sendMail = asyncHandler(async (req, res, next)=>{
const {senderName,senderEmail,senderPhone,text} = req.body

const sender = {
    email: senderEmail,
    name: senderName,
  };
  const recipients = [
    {
      email: "shindeswapnil2005@gmail.com",
    }
  ];
  
 client.bulk
    .send({
      from: sender,
      to: recipients,
      subject: "Enquiry regarding detroit automotive filters",
      text: text,
      category: "Integration Test",
    }).then((result)=>{
      console.log(result);
      
    }).catch((err)=>{
      console.log(err.message);
      
    })

    // console.log(response);
    
})

export{
    sendMail
}