import React from "react";
import { input, label } from "../style";
const SignupForm = () => {
  return (
    <>
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
          <label for="floating_first_name" className={label}>
            First name
          </label>
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
          <label for="floating_last_name" className={label}>
            Last name
          </label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            className={input}
            placeholder=" "
            required=""
          ></input>
          <label className={label}>Password</label>
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
      </div>
    </>
  );
};

export default SignupForm;
