import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  let links = [
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Company Login",
      path: "/login",
    },
    {
      name: "Tenant Login",
      path: "/login-tenant",
    },
    {
      name: "Signup",
      path: "/signup",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7" id="nav">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          {" "}
          <Link
            to="/"
            className="font-semibold text-2xl tracking-tight text-white"
          >
            Property Management
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white bg-none"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute gap-10 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            open ? "bg-burger" : "top-[-490px]"
          }`} 
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.path}
                className="text-white hover:text-yellow-400 focus:text-yellow-400 duration-500"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
