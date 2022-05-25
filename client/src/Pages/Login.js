import React from "react";
import "../index.css";
import { input, label, button } from "../style";

function Login() {
  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl" id="card">
        <h1 className="flex justify-center text-2xl text-bold text-white mt-3">Company Login</h1>
        <form className="p-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>
              Password
            </label>
          </div>
          <button type="submit" className={button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
