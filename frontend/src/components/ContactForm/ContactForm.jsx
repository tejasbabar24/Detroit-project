import { useState } from "react";
import Button from "../Button/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", text: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: event.target.name.value,
      email: event.target.email.value,
      text: event.target.text.value,
    });
  };

  const onViaCall = () => alert("Calling...");
  const onViaWp = () => alert("Opening WhatsApp...");
  const onViaEmail = () => alert("Opening Mail...");

  return (
    <section className="h-screen pt-5 box-border" id="contact">
    <div className="max-w-4xl mx-auto px-5 py-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">CONTACT US</h1>
        <p className="text-lg md:text-xl font-medium mt-3 text-gray-700">
          LET’S CONNECT! WE’RE HERE TO HELP. REACH OUT THROUGH THE FORM, PHONE, OR EMAIL.
        </p>
      </div>

      {/* Contact Options */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Button 
          text="VIA WHATSAPP" 
          clickAction={onViaWp} 
          icon={<FaWhatsapp fontSize="28px" />} 
          color="green" 
        />
        <Button 
          text="VIA CALL" 
          clickAction={onViaCall} 
          icon={<FaPhoneAlt fontSize="24px" />} 
          color="blue"
        />
        <Button 
          isOutline={true} 
          text="VIA EMAIL FORM" 
          clickAction={onViaEmail} 
          icon={<HiMail fontSize="24px" />} 
          color="black"
        />
      </div>

      {/* Form Section */}
      <section className="flex flex-col md:flex-row items-center mt-10">
        <form className="flex flex-col gap-6 w-full md:w-3/5 bg-white p-6 shadow-lg rounded-lg">
          <div className="relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2 text-blue-700" htmlFor="name">Name</label>
            <input className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-blue-500 w-full transition duration-200" type="text" name="name" required />
          </div>

          <div className="relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2 text-blue-700" htmlFor="email">Email</label>
            <input className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-blue-500 w-full transition duration-200" type="email" name="email" required />
          </div>

          <div className="relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2 text-blue-700" htmlFor="text">Message</label>
            <textarea className="p-4 border border-gray-300 rounded-lg focus:outline-blue-500 w-full h-32 resize-none transition duration-200" name="text" required />
          </div>

          <div className="flex justify-end">
            <Button text="SUBMIT" color="blue" />
          </div>
        </form>

        {/* Contact Image */}
        <div className="hidden md:block w-2/5">
          <img src="/images/contact.svg" alt="Contact" className="w-full" />
        </div>
      </section>

      {/* Displaying Form Data */}
      {formData.name && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center text-blue-900">
          <p className="font-semibold text-lg">Submitted Data:</p>
          <p>{formData.name} | {formData.email} | {formData.text}</p>
        </div>
      )}
    </div>
    </section>
  );
};

export default ContactForm;
