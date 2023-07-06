import React from "react";
import { Tooltip } from "react-tooltip";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import Lottie from "lottie-react";
import animationdata from "../assets/congratulations-page.json";

const EndPage = () => {
  const navigate = useNavigate();
  const { score } = useParams();
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
      <div className="container px-6 py-5 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Lottie
              loop={false}
              style={{ height: "520px", width: "500px" }}
              animationData={animationdata}
            />
          </div>
          <div className=" w-full lg:w-1/2">
            <div className=" flex-col lg:justify-center lg:max-w-lg">
              <h1 className="text-3xl font-semibold  text-center text-gray-800  lg:text-4xl">
                Congratulations! you have scored{" "}
                <b className="text-blue-800">{score} out of 4</b> on the quiz!<br/> 
                🎉
              </h1>

              <p className="mt-3 text-center text-gray-800 ">
                You've done an amazing job in testing your knowledge about
                diabetic nutrition,we're delighted with your commitment to
                understanding and managing your nutrition for diabetes. Keep up
                the great work and continue to prioritize your health and
                well-being. We're here to support you on your journey to optimal
                health! If you have any further questions or would like to
                explore more about diabetic nutrition, feel free to visit the
                Forum and share with the community.
              </p>
              <div className="flex justify-center items-center gap-5">
                <button
                  onClick={() => navigate("/startquiz")}
                  className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-700  transform bg-gradient-to-br from-yellow-400 to-pink-500 hover:from-emerald-500 hover:to-blue-500 rounded-lg lg:w-auto  focus:outline-none focus:bg-blue-700"
                >
                  Retry Quiz
                </button>
                <button
                  onClick={() => navigate("/forum")}
                  className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-700  transform bg-gradient-to-br from-pink-500 via-purple-500 to bg-blue-800 hover:from-blue-500 hover:to-emerald-500 rounded-lg lg:w-auto  focus:outline-none focus:bg-blue-700"
                >
                  Visit Forum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndPage;
