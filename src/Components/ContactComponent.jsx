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
      <div id='contact' className="h-full w-full border grid grid-rows-[100px] p-20 border border-white">
        <h2 className="text-4xl lg:text-6xl text-primary border">Contact</h2>
        <form className="border flex flex-col" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
}