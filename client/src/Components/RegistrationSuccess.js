import React from "react";
import { Link } from "react-router-dom";
import { button } from "../style";

const RegistrationSuccess = () => {
  return (
    <div className="flex justify-center mt-32 text-gray-300">
      <div id="card" className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl">
        <h1 className="text-center text-2xl font-bold mb-3">
          Registration Successful!
        </h1>
        <p className="text-center text-gray-300 mb-3">
          Thank your for registering. Now you can Login to your account.
        </p>
        <Link to="/login">
          <div className="flex justify-center">
            <button type="submit" className={button}>
              Login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
