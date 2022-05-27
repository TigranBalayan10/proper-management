import React from "react";
import { input, label, button } from "../style";

const AddProperty = () => {

  return (
    <>
      <div className="relative z-0 w-5/6 mb-6 mt-5 group">
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
        + Add
      </button>
    </>
  );
};

export default AddProperty;
