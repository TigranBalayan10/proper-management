import React from "react";
import { button } from "../style";
import "../index.css";
import SignupForm from "./SignupForm";

const CompanySignup = () => {
  return (
    <>
      <form className="p-6">
        <SignupForm />
        <div className="flex justify-center mt-4">
          <button type="submit" className={button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CompanySignup;
