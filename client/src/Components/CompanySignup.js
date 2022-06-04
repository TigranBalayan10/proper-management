import React, { useState } from "react";
import { button, input, label } from "../style";
import "../index.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const CompanySignup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
      role: "OWNER",
    });
  };
  console.log(formState);
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.regSuccess(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="p-6" onSubmit={handleFormSubmit}>
      <h1 className="flex justify-center mb-5 text-2xl text-gray-300 content-center">
        Company Signup
      </h1>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={input}
            placeholder=" "
            value={formState.firstName}
            onChange={handleChange}
          ></input>
          <label htmlFor="floating_first_name" className={label}>
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={input}
            placeholder=" "
            value={formState.lastName}
            onChange={handleChange}
          ></input>
          <label htmlFor="floating_last_name" className={label}>
            Last name
          </label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className={input}
            placeholder=" "
            value={formState.password}
            onChange={handleChange}
          ></input>
          <label className={label}>Password</label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            className={input}
            placeholder=" "
            value={formState.email}
            onChange={handleChange}
          ></input>
          <label className={label}>Email address</label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 mt-6 group">
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className={input}
            placeholder=" "
            value={formState.phoneNumber}
            onChange={handleChange}
          ></input>
          <label className={label}>Phone number</label>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button type="submit" className={button}>
          Submit
        </button>
      </div>
      {error && <div>Signup failed</div>}
    </form>
  );
};

export default CompanySignup;
