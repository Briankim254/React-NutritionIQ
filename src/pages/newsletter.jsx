import React from "react";
import Logo from "../components/logo";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  return (
    <header className="bg-white ">
      <nav className="border-t-4 border-blue-800">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <Link to={"/"}>
            <Logo />
          </Link>

          <a
            className="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100  hover:text-blue-800  lg:mx-4 lg:my-0"
            href="#"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click on the Nutrition IQ logo to go back to the home page"
            data-tooltip-place="bottom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <Tooltip id="my-tooltip" />
        </div>
      </nav>

      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 ">
                Subscribe To The{" "}
                <span className="text-blue-800">Newsletter</span>
              </h1>

              <p className="mt-3 text-gray-600 ">
                be the first to knows when our{" "}
                <span className="font-medium text-blue-800">Brand</span> is live
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-800  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-700"
                  placeholder="Email Address"
                />

                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-800 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewsletterSection;
