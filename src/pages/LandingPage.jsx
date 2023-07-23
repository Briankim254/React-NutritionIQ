import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationdata from "../assets/community2.0.json";


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-slate-800 rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1683537277115-502a6eecb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-semibold  text-gray-800  lg:text-4xl  leading-none sm:text-xl">
              Elevate Your Health
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold text-blue-800">
                Unlock Your Nutritional Potential {" "}
              </span>{" "}
              together with diabetics who are living healthier, happier lives
              with the help of our nutrition web app.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/startquiz")}
                className=" px-6 py-2.5  text-sm font-medium leading-5 text-center text-white capitalize bg-blue-800 rounded-lg hover:bg-blue-700 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Take Quiz
              </button>
              <Link
                to="/forum"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-blue-800"
              >
                Join Community
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-6 ">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold  text-gray-800  lg:text-4xl">
                Join the Diabetic Nutrition{" "}
                <b className="text-blue-800">Forum</b>
              </h1>
              <p className="mt-4 text-gray-600 ">
                Discover a supportive network and share valuable insights on
                diabetic nutrition. Connect with experts and fellow individuals
                managing diabetes to learn and support each other on your
                journey.
              </p>
              <div className="mt-6">
                <Link
                  to="/forum"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-800 rounded-lg hover:bg-blue-700 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Check out Forum
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Lottie
              style={{ height: "700px", width: "700" }}
              loop={false}
              animationData={animationdata}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
