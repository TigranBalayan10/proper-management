import React, { useEffect, useState } from "react";
import "../index.css";
import { button, label } from "../style";
import AddProperty from "./AddProperty";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { QUERY_PROPERTY } from "../utils/queries";

const CompanyDashboard = () => {
  const propertyIdLocalStorage = localStorage.getItem("propertyId");
  const [propertyId, setPropertyId] = useState(propertyIdLocalStorage);
  const [addProperty, setAddProperty] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  // on click on property, show all requests
  const propertyClickHandler = (property) => {
    setPropertyId(property.id);
  };
  
  const {
    loading: LoadingProperty,
    error: ErrorProperty,
    data: DataProperty,
  } = useQuery(QUERY_PROPERTY, {
    variables: {
      getPropertyId: propertyId,
    },
  });
  const sentRequests = DataProperty?.getProperty?.requests;

  // const [requestState, setRequestState] = useState([]);
  
  LoadingProperty && console.log("Loading Property");
  ErrorProperty && console.log("Error Property");

  const properties = data?.me?.properties;

  console.log(data);

  const addPropertyHandler = () => {
    setAddProperty(!addProperty);
  };

  const status = [
    {
      id: 1,
      name: "PENDING",
    },
    {
      id: 2,
      name: "APPROVED",
    },
    {
      id: 3,
      name: "REJECTED",
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
                    src={require("../Media/Avatar.svg").default}
                    alt="Avatar"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                  />
                </div>
                <h2 className="text-gray-300 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  {loading ? "Loading..." : data.me.firstName}{" "}
                  {loading ? "Loading..." : data.me.lastName}
                </h2>
                <div className="flex justify-evenly">
                  <div className="mx-6 mb-6 lg:mx-4 xl:mx-4 lg:px-4 xl:px-4">
                    <h2 className="text-gray-300 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      0
                    </h2>
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Rented
                    </p>
                  </div>
                  <div className="px-5 mb-6 lg:mx-3 xl:mx-6 lg:px-4 xl:px-8 border-l">
                    <h2 className="text-gray-300 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {loading ? "Loading..." : data.me.properties.length}
                    </h2>
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Properties
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className={button}
                  onClick={addPropertyHandler}
                >
                  Add Property
                </button>
                {addProperty ? <AddProperty /> : null}
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l text-gray-300 lg:border-r  flex flex-col items-center py-10">
                <h1 className="text-2xl">Properties</h1>
                {loading
                  ? null
                  : properties.map((property) => (
                      <div
                        className="cursor-pointer block p-6 w-full rounded-lg shadow-2xl"
                        key={property.id}
                        onClick={() => propertyClickHandler(property)}
                      >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight mt-2">
                          {property.name}
                        </h5>
                        <p className="font-normal">
                          {property.address}, {property.city}, {property.state}{" "}
                          {property.zip} <br />
                        </p>
                      </div>
                    ))}{" "}
              </div>
              <div className="w-full lg:w-1/3 px-12 text-gray-300  border-gray-300 flex flex-col items-center py-10">
                <h2 className="text-3xl text-gray-300 mb-3 font-bold">Inbox</h2>
                <div className="w-full text-sm font-medium border-gray-200 bg-transparent">
                  <h2 className="flex font-semibold justify-center text-2xl mb-3">
                    Maintenance
                  </h2>
                  {/* if no data in requests show no data */}

                  {(loading || LoadingProperty)  ? (
                    <p className="text-gray-300 dark:text-gray-100 text-sm leading-5">
                      Loading...
                    </p>
                  ) : (
                    <>
                      {(ErrorProperty || sentRequests?.length === 0) ? (
                        <p className="text-center text-gray-300 dark:text-gray-100">
                          No Requests
                        </p>
                      ) : (
                        sentRequests.map((request) => (
                          <div
                            key={request.id}
                            className="flex justify-between w-full text-white border-b border-gray-200 mb-4"
                          >
                            <p>Type: {request.type}</p>
                            <select className="block w-30 text text-gray-300 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                              {status.map((status) => (
                                <>
                                  <option
                                    className="bg-pink-900 text-gray-300"
                                    key={status.id}
                                  >
                                    {status.name}
                                  </option>
                                </>
                              ))}
                            </select>
                            <p>From: Unit: {request.unitNumber}</p>
                          </div>
                        ))
                      )}
                    </>
                  )}
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
