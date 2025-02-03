import Button from "../Button/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";  
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  const onViaCall = () =>{
    alert('Call')
  }
  const onViaWp = () =>{
    alert('whatsapp')
  }
  const onViaEmail = () =>{
    alert('Mail')
  }
  return (
<>
    <div className="max-w-full sm:max-w-[1000px] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-full sm:max-w-[80%]">CONTACT US</h1>
      <p className="text-base pt-3 sm:text-lg md:text-xl font-medium">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>

    <section className="box-border flex flex-col sm:flex-row max-w-full sm:max-w-[1000px] mx-auto mt-10 items-end">
      
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <Button
            text="VIA WHATSAPP"
            clickAction={onViaWp}
            icon={<FaWhatsapp fontSize="28px"/>}
          />
          <Button text="VIA CALL" clickAction={onViaCall} icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          clickAction={onViaEmail}
          icon={<HiMail fontSize="24px" />}
        />

        <form className="flex flex-col gap-5 pb-5" onSubmit={onSubmit}>
          <div className="flex flex-col w-full relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2" htmlFor="name">Name</label>
            <input className="h-10 px-2 border border-gray-300" type="text" name="name" />
          </div>
          <div className="flex flex-col w-full relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2" htmlFor="email">Email</label>
            <input className="h-10 px-2 border border-gray-300" type="email" name="email" />
          </div>
          <div className="flex flex-col w-full relative">
            <label className="text-sm absolute top-[-12px] left-2 bg-white px-2" htmlFor="text">Text</label>
            <textarea className="p-2 border border-gray-300" name="text" rows="5" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className="self-start hidden md:block">
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
    </>
  );
};

export default ContactForm;