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
      <div id='contact' className="h-full min-h-[600px] w-full max-w-[800px] flex flex-col text-white mb-20">
        <h2 className="text-4xl lg:text-6xl text-primary h-20">Contact me</h2>
        <form className="flex flex-col gap-8 rounded-md" ref={form} onSubmit={sendEmail}>
          <div className='grid gap-2'>
            <label htmlFor='from_name' className='text-black dark:text-white'>Name</label>
            <input name='from_name' className='rounded text-black px-2 outline outline-gray' type="text" required />
          </div> 
          <div className='grid gap-2'>
            <label className='text-black dark:text-white'>Email</label>
            <input className='rounded text-black px-2 outline outline-gray' type="email" name="user_email" required />
          </div> 
          <div className='grid gap-2'>
            <label htmlFor='message' className='text-black dark:text-white'>Message</label>
            <textarea name='message' className='rounded h-40 text-black px-2 outline outline-gray' required />
          </div> 
          <input className='bg-primary rounded p-2 text-darkGray font-semibold' type="submit" value={btnMessage} />
        </form>
      </div>
    );
}

