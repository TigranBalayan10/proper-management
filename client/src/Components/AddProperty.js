import React from "react";
import { input, label, button } from "../style";
import { useMutation } from "@apollo/client";
import { ADD_PROPERTY } from "../utils/mutations";
import { useState } from "react";

const AddProperty = () => {
  const [addProp, { error }] = useMutation(ADD_PROPERTY);
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    numberOfApartments: "",
  });

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
      await addProp({
        variables: { ...formState }
      });
      console.log("property added");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid xl:grid-cols-2 xl:gap-6 mt-4">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>Property Name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="numberOfApartments"
            id="numberOfApartments"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>Apartment quantity</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>Address</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="city"
            id="city"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>City</label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="state"
            id="state"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>State</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="zip"
            id="zip"
            onChange={handleChange}
            className={input}
            placeholder=" "
          ></input>
          <label className={label}>Zip Code</label>
        </div>
      </div>
      <button type="submit" className={button}>
        + Add
      </button>
    </form>
  );
};

export default AddProperty;
