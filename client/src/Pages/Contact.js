import React, { useState } from "react";
import { input, label, button } from "../style";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = e.target.value;
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl" id="card">
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className={input}
              type="text"
              name="name"
              placeholder=" "
              defaultValue={name}
              onBlur={handleChange}
            />
            <label className={label}>Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className={input}
              type="email"
              name="name"
              placeholder=" "
              defaultValue={name}
              onBlur={handleChange}
            />
            <label className={label}>E-Mail</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border-1 border-yellow-600 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Your message..."
              name="message"
              rows="7"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text text-red  text-red-500">
                {errorMessage}
              </p>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <button type="submit" className={button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
