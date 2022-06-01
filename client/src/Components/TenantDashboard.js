import React from "react";
import "../index.css";
import { label, button, numinput, inputdash } from "../style";
import { QUERY_PROPERTIES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ATTACH_TENANT } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import { ADD_REQUEST } from "../utils/mutations";

const TenantDashboard = () => {
  const { loading, error, data } = useQuery(QUERY_PROPERTIES);
  console.log(data, "data");
  const {
    loading: loadingMe,
    error: errorMe,
    data: dataMe,
  } = useQuery(QUERY_ME);
  const [attachTenant, { error: errorTenant }] = useMutation(ATTACH_TENANT);
  const [addRequest, { error: errorRequest }] = useMutation(ADD_REQUEST);
  const [getPropertyId, setGetPropertyId] = useState({
    propertyId: "",
  });
  const me = dataMe?.me;
  const properties = data?.getProperties;

  // useEffect get property id from properies
  useEffect(() => {
    if (properties) {
      const propertyId = properties.find((property) => {
        console.log(property, "property");
        if (property.tenants.id === me.id) {
          return property.id;
        }
      });
      setGetPropertyId({
        propertyId: propertyId,
      });
    }
  }, [properties]);
  
  const [request, setRequest] = useState({
    propertyId: "",
    firstName: me?.firstName,
    lastName: me?.lastName,
    type: "",
    unitNumber: "",
    moreInfo: "",
  });

 
  const propertyId = properties?.filter(
    (property) => property.id === getPropertyId
  );

  const handleChangeRequest = (event) => {
    const { name, value } = event.target;
    setRequest({
      ...request,
      [name]: value,
    });
  };
  console.log(request);

  const handleSubmitRequest = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addRequest({
        variables: {
          ...request,          
        },
      });
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
    // clear form values
    setRequest({
      type: "",
      unitNumber: "",
      moreInfo: "",
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setGetPropertyId({
      ...getPropertyId,
      [name]: value,
    });
  };

  console.log(getPropertyId);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(getPropertyId, "submit form");
    try {
      const result = await attachTenant({
        variables: getPropertyId,
      });

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const maintenanceTypes = [
    {
      id: 1,
      name: "Plumbing",
    },
    {
      id: 2,
      name: "Electric",
    },
    {
      id: 3,
      name: "Heating",
    },
    {
      id: 4,
      name: "Carpentry",
    },
    {
      id: 5,
      name: "Other",
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
              <form
                className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10"
                onSubmit={handleFormSubmit}
              >
                <div className="w-24 h-24 mb-3 p-2 rounded-full flex items-center justify-center">
                  <img
                    src={require("../Media/Avatar.svg").default}
                    alt="Avatar"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                  />
                </div>
                <h2 className="text-gray-300 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  {loadingMe ? "Loading..." : me.firstName}{" "}
                  {loadingMe ? "Loading..." : me.lastName}
                </h2>
                <p className="flex text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  1001 Main St apt 100, Glendale, CA
                </p>
                <p className="text-gray-300 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  Broadway Enterprise
                </p>
                {handleFormSubmit ? null : (
                  <div className="relative z-0 w-full mb-6 mt-6 group">
                    <label className={label}>Add Property</label>

                    <select
                      className={inputdash}
                      name="propertyId"
                      value={getPropertyId}
                      onChange={handleChange}
                    >
                      <option value="">Select Property</option>
                      {loading
                        ? null
                        : properties.map((property) => (
                            <option
                              key={property.id}
                              value={property.id}
                              className="bg-pink-900 text-gray-300"
                            >
                              {property.name}
                            </option>
                          ))}
                    </select>

                    <button
                      type="submit"
                      className="px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-pink-900 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300"
                    >
                      + ADD
                    </button>
                  </div>
                )}

                <div className="relative z-0 mb-6 mt-5">
                  <input type="number" className={numinput}></input>
                  <label className={label}>Rent Amount</label>
                </div>
                <button type="submit" className={button}>
                  Pay Rent
                </button>
              </form>
              <form
                className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10"
                onSubmit={handleSubmitRequest}
              >
                <h1 className="text-2xl text-white">Request Maintenance</h1>
                <div className="relative z-0 w-full mb-6 mt-6 group">
                  <label className={label}>Choose Maintenance Type</label>
                  <select
                    className={inputdash}
                    name="type"
                    onChange={handleChangeRequest}
                  >
                    {maintenanceTypes.map((type) => (
                      <option
                        key={type.id}
                        className="bg-pink-900 text-gray-300"
                      >
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative z-0 mb-3">
                  <input
                    type="number"
                    name="unitNumber"
                    onChange={handleChangeRequest}
                    className={numinput}
                  ></input>
                  <label className={label}>Apartment Number</label>
                </div>
                <label className="block mb-2 text-xl font-medium text-gray-300 dark:text-gray-400">
                  More Info
                </label>
                <textarea
                  id="message"
                  name="moreInfo"
                  onChange={handleChangeRequest}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border-1 border-yellow-600 focus:ring-yellow-500 focus:border-yellow-500 mb-4"
                  placeholder="Your message..."
                ></textarea>
                <button type="submit" className={button}>
                  Request
                </button>
              </form>
              <div className="w-full lg:w-1/3 px-12 text-gray-300  border-gray-300 flex flex-col items-center py-10">
                <h2 className="text-2xl text-gray-300 mb-3">Feedback</h2>
                <label
                  for="message"
                  className="block mb-2 text-xl font-medium text-gray-300 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="7"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border-1 border-yellow-600 focus:ring-yellow-500 focus:border-yellow-500 mb-4"
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
