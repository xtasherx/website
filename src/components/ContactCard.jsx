import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

function ContactCard() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [formValues, setFormValues] = useState({
    from_name: "",
    email: "",
    message: "",
    sent: false,
  });

  useEffect(() => {
    setOutput(inputValue);
  }, [inputValue]);

  const change = (e) => {
    setInputValue(e.target.value);
    setFormValues({ ...formValues, from_name: e.target.value });
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormValues({
      from_name: "",
      email: "",
      message: "",
      sent: true,
    });
  }

  return (
    <>
      <div className=" w-90p w-60p-md u-flex u-flex-column u-center">
        <h4 className=" text-gray-600 font-extrathin">
          {formValues.sent ? "Your email is on it's way" : "Nice to meet you"}
          <span className="font-medium text-purple-400 text-underline">
            {inputValue.length > 0 ? " " : ""}
            {output}
          </span>
          {formValues.sent ? ". Have a great day!" : "! Let's chat."}
        </h4>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-control u-round-lg">
            <input
              onChange={change}
              placeholder="name"
              type="text"
              name="from_name"
              value={formValues.from_name}
            />
          </div>
          <div className="input-control u-round-lg">
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              value={formValues.email}
            />
          </div>

          <div className="input-control u-round-lg">
            <textarea
              name="message"
              placeholder="message"
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              value={formValues.message}
            />
          </div>

          <input
            type="submit"
            value={formValues.sent ? "Message Sent" : "Send"}
            className="btn--pilled font-alt text-gray-600 font-bold btn--sm m-1 hover-grow"
            disabled={formValues.sent ? true : false}
          />
        </form>
      </div>
    </>
  );
}

export default ContactCard;
