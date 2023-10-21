import { useEffect, useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";

function ContactCard() {
  function sendEmail(e) {
    e.preventDefault();
    console.log("clicked");
    emailjs
      .sendForm(
        "contact_service",
        "template_vqmdehr",
        e.target,
        "user_N1lY8Mc7IHZz5e2Jv6ZE1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  // return (
  //   <form className="contact-form" onSubmit={sendEmail}>
  //     <input type="hidden" name="contact_number" />
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );

  //////

  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  useEffect(() => {
    setOutput(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className=" w-90p w-60p-md u-flex u-flex-column u-center">
        <h4 className=" text-gray-600 font-extrathin">
          Nice to meet you
          <span className="font-medium text-purple-400 text-underline">
            {inputValue.length > 0 ? " " : ""}
            {output}
          </span>
          <span>! </span>
          Let's chat.
        </h4>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-control">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-control u-round-lg">
            <input type="email" placeholder="Email" name="user_email"></input>
          </div>
          <textarea placeholder="Enter your message" name="message"></textarea>
          <div>
            <Button type="submit" value="send " text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactCard;
