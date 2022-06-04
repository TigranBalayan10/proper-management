import React, { useState } from "react";
import "../index.css";
import { input, label, button } from "../style";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { ApolloError } from "@apollo/client";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  const authError = error?.message;

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log(formState);
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(formState, "login");
      if (formState.role === "TENANT") {
        Auth.loginTenant(data.login.token);
      } else {
        Auth.loginOwner(data.login.token);
      }
    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
      role: "",
    });
  };

  // console.log(ApolloError(error));
  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl" id="card">
        <h1 className="flex justify-center text-2xl text-bold text-white mt-3">
          Login
        </h1>
        <form className="p-6" onSubmit={handleFormSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className={input}
              placeholder=" "
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <label className={label}>Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className={input}
              placeholder=" "
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
            <label className={label}>Password</label>
            {authError ? (
              <p class="mt-2 text-sm text-red-500 dark:text-red-500">
                <span class="font-medium"></span> {authError}
              </p>
            ) : null}
          </div>
          <div className="flex items-center mb-4">
            <input
              id="roleOwner"
              type="radio"
              value="OWNER"
              name="role"
              onChange={handleChange}
              className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-400"
            ></input>
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
            >
              Property Owner
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="roleTenant"
              type="radio"
              value="TENANT"
              name="role"
              onChange={handleChange}
              className="w-4 h-4 text-yellow-900 bg-gray-100 border-gray-300 focus:ring-yellow-400"
            ></input>
            <label
              htmlFor="default-radio-2"
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
