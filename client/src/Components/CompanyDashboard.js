import React from "react";
import "../index.css";
import { input, label, button } from "../style";

const CompanyDashboard = () => {
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
                  Enterprise Properties
                </h2>
                <p className="flex text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  Glendale, California
                </p>
                <p className="text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  Properties owned all over the US and Canada.
                </p>
                <div className="flex items-start">
                  <div className>
                    <h2 className="text-gray-300 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      125
                    </h2>
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Rented
                    </p>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-300 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      34
                    </h2>
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Properties
                    </p>
                  </div>
                  <div className>
                    <h2 className="text-gray-300 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      3
                    </h2>
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Commercial
                    </p>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 mt-5 group">
                  <input
                    type="text"
                    name="floating_password"
                    id="floating_password"
                    className={input}
                    placeholder=" "
                    required=""
                  ></input>
                  <label className={label}>Add a Property</label>
                </div>
                <button type="submit" className={button}>
                  + Add
                </button>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <h2 className="text-2xl text-gray-300 mb-3">Tenants</h2>
                <tr class=" border-b text-gray-300 cursor-pointer">
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    John Smith
                  </th>
                  <td class="px-6 py-2">Broadway Building</td>
                </tr>
              </div>
              <div className="w-full lg:w-1/3 px-12 text-gray-300  border-gray-300 flex flex-col items-center py-10">
                <h1 className="text-2xl">Properties</h1>

                <div class="block p-6 max-w-sm rounded-lg shadow-2xl  dark:bg-gray-800">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-300 mt-2">
                    Broadway Building
                  </h5>
                  <p class="font-normal text-gray-300 dark:text-gray-400">
                    100 Main str. apt. 107 <br />
                    New York, NY 10001 <br />
                  </p>
                </div>
                <div class="block p-6 max-w-sm rounded-lg shadow-2xl  dark:bg-gray-800">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-300 mt-2">
                    Broadway Building
                  </h5>
                  <p class="font-normal text-gray-300 dark:text-gray-400">
                    100 Main str. apt. 107 <br />
                    New York, NY 10001 <br />
                  </p>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
