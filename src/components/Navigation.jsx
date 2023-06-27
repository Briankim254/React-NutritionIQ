import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
            <Link
              className="px-4 py-2 mt-2 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 mt-2 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline"
              to="/team"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 mt-2 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline"
            >
              Contact
            </Link>
            <Link
              className="px-4 py-2 mt-2 text-sm text-gray-800 md:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline"
              to="/forum"
            >
              Community
            </Link>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              <button
                onClick={() => navigate("/login")}
                className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-800 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="items-center shadow-blue-800 shadow-md block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-800 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
