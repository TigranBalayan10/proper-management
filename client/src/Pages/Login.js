import React from "react";
import "../index.css";
import { input, label, button } from "../style";

function Login() {
  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl" id="card">
        <h1 className="flex justify-center text-2xl text-bold text-white mt-3">
          Login
        </h1>
        <form className="p-6">
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
              name="floating_password"
              id="floating_password"
              className={input}
              placeholder=" "
              required=""
            ></input>
            <label className={label}>Password</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-400"
            ></input>
            <label
              for="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
            >
              Property Owner
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-400"
            ></input>
            <label
              for="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
            >
              Tenant
            </label>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className={button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
