import React from "react";
import { input, label, button } from "../style";
import "../index.css";

const CompanySignup = () => {
  return (
    <>
      <form className="p-6">
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>First name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Last name</label>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Phone number (123-456-7890)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Company (Ex. Google)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Password</label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            className={input}
            placeholder=" "
            required=""
          ></input>
          <label className={label}>Property Name</label>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Street Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>City</label>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>State</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Zip Code</label>
          </div>
        </div>
        <button type="submit" className={button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default CompanySignup;
