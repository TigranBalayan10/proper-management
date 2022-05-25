import React from "react";
import { input, label, button, inputdash } from "../style";
import "../index.css";

const TenantSignup = () => {
  const propertyName = [
    {
      id: 1,
      name: "Broadway Estate",
    },
    {
      id: 2,
      name: "California Estate",
    },
    {
      id: 3,
      name: "Canyon Estate",
    },
    {
      id: 4,
      name: "Louise Enterprise",
    },
  ];
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
        <div className="relative z-0 w-full mb-6 group">
          <label className={label}>Property Name</label>
          <select name="cars" id="cars" className={inputdash}>
            {propertyName.map((property) => (
              <option
                key={property.id}
                value={property.name}
                className="bg-pink-900 text-gray-300"
              >
                {property.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default TenantSignup;
