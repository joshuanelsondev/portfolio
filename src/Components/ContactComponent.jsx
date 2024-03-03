// ContactComponent.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export default function ContactComponent () {
  const [btnMessage, setBtnMessage] = useState('Send Email')  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnMessage('Sending...');

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        apiKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setBtnMessage('Message Sent!');
          setTimeout(() => {
            setBtnMessage('Send');
          }, 2000);

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
      <div id='contact' className="h-full min-h-[600px] w-full max-w-[800px] flex flex-col bg-[#f2f2f2] rounded-md  mb-40 p-4 shadow">
        <div className="flex justify-between">
          <h2 className="text-3xl  text-black h-20">Let&apos;s Connect!</h2>
          <p className='text-xl font-semibold'>Joshua Nelson</p>
        </div>
        <form className="flex flex-col gap-8 rounded-md" ref={form} onSubmit={sendEmail}>
          <div className='grid gap-2'>
            <label htmlFor='from_name' className='text-black dark:text-black'>Name</label>
            <input name='from_name' id='from_name' className='rounded border border-[#ccc] box-border text-black outline-primary py-1 px-3 shadow' type="text" required />
          </div> 
          <div className='grid gap-2'>
            <label htmlFor="email" className='text-black dark:text-black'>Email</label>
            <input className='rounded border border-[#ccc] box-border text-black outline-primary py-1 px-3 shadow' type="email" name="user_email" id='email' required />
          </div> 
          <div className='grid gap-2'>
            <label htmlFor='message' className='text-black dark:text-black'>Message</label>
            <textarea name='message' id='message' className='rounded h-60 text-black p-4 border border-[#ccc] shadow outline-primary resize-none' required />
          </div> 
          <input className='bg-primary rounded p-2 text-darkGray font-semibold shadow shadow-gray md:bg-opacity-90 md:hover:bg-opacity-100 cursor-pointer' type="submit" value={btnMessage} />
        </form>
      </div>
    );
}

