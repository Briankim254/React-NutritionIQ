import React from "react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import Lottie from "lottie-react";
import animationdata from "../assets/112900-checklist (2).json";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="border-t-4 border-blue-800">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <Logo />

          <div>
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
        </div>
      </nav>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Elevate Your Health Consciousness and Ignite Your <br />{" "}
                <span className="text-blue-800">Nutrition IQ</span>
              </h1>

              <p className="mt-3 text-gray-800 ">
                Are you ready to embark on an exciting journey to enhance your
                nutritional knowledge and empower yourself in managing diabetes?
                It's time to unleash your nutrition superpowers. Click the
                "Start" button below to unlock your nutritional potential. Dive
                into our comprehensive quiz designed for both novice or
                knowlagable domain individuals.
              </p>

              <button
                onClick={() => navigate("/quiz")}
                className=" inline-flex justify-center items-center gap-2 w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-all delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg lg:w-auto hover:gap-6 duration-500    transform  focus:outline-none focus:bg-blue-700"
              >
                Start Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Lottie animationData={animationdata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
