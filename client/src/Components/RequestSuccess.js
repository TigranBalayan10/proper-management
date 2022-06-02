import React from "react";
import {buttonSmall} from "../style";
import { useState } from "react";

const RequestSuccess =({okHandler}) => {
   
  return (
      
    <div className="flex justify-center text-gray-300">
      <div id="card" className=" p-4 rounded-3xl shadow-2xl">
        <h1 className="text-center text-green-400 text-2xl font-bold mb-3">
          Your Request has been sent!
        </h1>
        <p className="text-center text-gray-300 mb-3">
          The contractor will contact you in 2-3 business days.
        </p>
          <div className="flex justify-center">
          <button type="button" onClick={okHandler} className={buttonSmall}>OK</button>
          </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
