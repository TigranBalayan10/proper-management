import React from "react";
import { label, button, inputdash } from "../style";
import "../index.css";
import SignupForm from "./SignupForm";

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
        <SignupForm />
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
        <div className="flex justify-center mt-4">
          <button type="submit" className={button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TenantSignup;
