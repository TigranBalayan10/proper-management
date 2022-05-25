import React from "react";
import "../index.css";
import { label, button, numinput, inputdash } from "../style";

const TenantDashboard = () => {
  const maintenanceTypes = [
    {
      id: 1,
      name: "Plumbing",
    },
    {
      id: 2,
      name: "Electrical",
    },
    {
      id: 3,
      name: "HVAC",
    },
    {
      id: 4,
      name: "Carpentry",
    },
    {
      id: 5,
      name: "Painting",
    },
  ];

  return (
    <>
      <div className="w-full py-28">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div
              className="flex flex-col lg:flex-row mx-auto shadow rounded"
              id="card"
            >
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full flex items-center justify-center">
                  <img
                    src="../public/Avatar.svg"
                    alt="Avatar"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                  />
                </div>
                <h2 className="text-gray-300 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  John Smith
                </h2>
                <p className="flex text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  1001 Main St apt 100, Glendale, CA
                </p>
                <p className="text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  Broadway Enterprise
                </p>
                <div className="flex items-center">
                  <div className></div>
                </div>
                <div className="relative z-0 mb-6">
                  <input type="number" className={numinput}></input>
                  <label className={label}>Rent Amount</label>
                </div>
                <button type="submit" className={button}>
                  Pay Rent
                </button>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <h1 className="text-2xl text-white">Request Maintenance</h1>
                <div className="relative z-0 w-full mb-6 mt-6 group">
                  <label className={label}>Choose Maintenance Type</label>
                  <select className={inputdash}>
                    {maintenanceTypes.map((type) => (
                        <option key={type.id} value={type.name} className="bg-pink-900 text-gray-300">
                            {type.name}
                        </option>
                    ))}
                  </select>
                </div>
                <label
                  for="message"
                  class="block mb-2 text-xl font-medium text-gray-300 dark:text-gray-400"
                >
                  More Info
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border-1 border-yellow-600 focus:ring-yellow-500 focus:border-yellow-500 mb-4"
                  placeholder="Your message..."
                ></textarea>
                <button type="submit" className={button}>
                  Request
                </button>
              </div>
              <div className="w-full lg:w-1/3 px-12 text-gray-300  border-gray-300 flex flex-col items-center py-10">
                <h2 className="text-2xl text-gray-300 mb-3">Feedback</h2>
                <label
                  for="message"
                  class="block mb-2 text-xl font-medium text-gray-300 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="7"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border-1 border-yellow-600 focus:ring-yellow-500 focus:border-yellow-500 mb-4"
                  placeholder="Your message..."
                ></textarea>
                <button type="submit" className={button}>
                  Send
                </button>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantDashboard;
