import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" sticky backdrop-blur top-0 z-10 w-full  min-w-min  rounded-xl shadow-md">
        <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Logo />
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={toggleMenu}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`flex-col items-center flex-grow pb-4 border-blue-800 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <NavLink
              className="px-4 py-2 mt-2 active:text-blue-800 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline active:border-b-2 active:border-blue-800"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="px-4 py-2 mt-2  active:text-blue-800 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none active:border-b-2 active:border-blue-800  focus:shadow-outline"
              to="/team"
            >
              Team
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 mt-2 text-sm active:text-blue-800  text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline active:border-b-2 active:border-blue-800"
            >
              Contact
            </NavLink>
            <NavLink
              className="px-4 py-2 mt-2 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline active:border-b-2 active:border-blue-800"
              to="/forum"
            >
              Community
            </NavLink>

            <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700  lg:hidden">Khatab wedaa</h3>
              </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
