// ContactComponent.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactComponent () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_091zju5",
          "template_kx2no28",
          form.current,
          "OBvKElsFehAWv_TZS"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
      <div id='contact' className="h-full min-h-[600px] w-full flex flex-col text-white ">
        <h2 className="text-4xl lg:text-6xl text-primary h-20">Contact me</h2>
        <form className="flex flex-col gap-8" ref={form} onSubmit={sendEmail}>
          <div className='grid gap-2'>
            <label>Name</label>
            <input className='rounded text-black px-2' type="text" name="user_name" />
          </div> 
          <div className='grid gap-2'>
            <label>Email</label>
            <input className='rounded text-black' type="email" name="user_email" />
          </div> 
          <div className='grid gap-2'>
            <label>Message</label>
            <textarea className='rounded h-40 text-black' name="message" />
          </div> 
          <input className='bg-primary rounded p-2 text-darkGray font-semibold' type="submit" value="Send" />
        </form>
      </div>
    );
}