import React, { useState } from "react";
import "../index.css";
import CompanySignup from "../Components/CompanySignup.js";
import TenantSignup from "../Components/TenantSignup.js";

function Signup() {
  const [isCompany, setIsCompany] = useState(false);
  const [isTenant, setIsTenant] = useState(false);

  const handleCompany = () => {
    setIsCompany(true);
    setIsTenant(false);
  };
  const handleTenant = () => {
    setIsCompany(false);
    setIsTenant(true);
  };

  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/4 md:w-1/2 p-4 rounded-3xl shadow-2xl" id="card">
        <ul class="hidden text-sm font-medium text-center text-white rounded-lg divide-x divide-gray-200 shadow sm:flex">
          <li
            class="w-full inline-block p-4 hover:text-yellow-400 hover:bg-yellow-700 hover:rounded-xl focus:ring-4 focus:bg-yellow-900 focus:rounded focus:ring-yellow-700 cursor-pointer"
            onClick={handleCompany}
          >
            Company Signup
          </li>
          <li
            class="w-full inline-block p-4 hover:text-yellow-400 hover:bg-yellow-700 hover:rounded-xl focus:ring-4 focus:bg-yellow-900 focus:rounded focus:ring-yellow-700 cursor-pointer"
            onClick={handleTenant}
          >
            Tenant Signup
          </li>
        </ul>
        {isCompany ? <CompanySignup /> : null}
        {isTenant ? <TenantSignup /> : null}
      </div>
    </div>
  );
}

export default Signup;
