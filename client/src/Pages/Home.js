import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { button } from "../style";


const Home = () => {
  return (
    <div>
      <div className="pt-24 pl-7">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Modernize your business with one powerful property management
              solution
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Finally, property management software that gives you the clarity
              to focus on what matters most. Intuitively designed to delight
              your residents and staff. Smartly automated so you have the time
              to run your business and scale your vision.
            </p>
          </div>
          <div className=" flex flex-row gap-6 w-full md:w-3/5 py-6 text-center sm:flex-col sm:w-2">
            <div className="block p-6 rounded-lg shadow-md" id="card-home">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                For Tenants
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-5 text-xl">
                Login and manage your payments to your landlord. Give feedback and order repair.
              </p>
              <Link to="/login-tenant" type="button" className={button}>Tenant Login</Link>
            </div>
            <div className="block p-6  rounded-lg shadow-md" id="card-home">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                For Businesses
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-5 text-xl">
                Login and manage your properties. See your tenants and see requests for repairs. Keep track of your tenants and their payments.
              </p>
              <Link to="/login" type="button" className={button}>Business Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
