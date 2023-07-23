import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationdata from "../assets/community2.0.json";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white mb-6 ">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex items-center justify-center w-auto h-auto lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1683537277115-502a6eecb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold  text-gray-800  lg:text-4xl">
                Elevate Your Health{" "}
              </h1>
              <p className="mt-4 text-gray-600 ">
                <span className="font-bold text-blue-800">
                  Unlock Your Nutritional Potential{" "}
                </span>{" "}
                together with diabetics who are living healthier, happier lives
                with the help of our nutrition web app.
              </p>
              <div className="flex items-center mt-6 gap-6">
                <button
                  onClick={() => navigate("/startquiz")}
                  className=" px-6 py-2.5  text-sm  leading-5 text-center text-white capitalize bg-blue-800 rounded-lg hover:bg-blue-700 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Take Quiz
                </button>
                <Link
                  to="/forum"
                  aria-label=""
                  className="inline-flex items-center font-medium transition-colors duration-200 text-deep-purple-accent-400 hover:text-blue-800"
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
      </div>
      <section className="bg-white ">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-center "
              src="undraw_online_test_re_kyfx.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
              Improve Your Nutrition with Our Brilliant App
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 ">
            Welcome to Nutrition IQ! Our smart app helps you make healthier food choices and
            provides personalized nutrition recommendations based on your preferences and goals.
            Whether you want to lose weight, maintain a balanced diet, or just eat healthier, our
            app has got you covered!
            </p>

            <div className="mt-6 sm:-mx-2">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-black transition-colors duration-300 bg-gray-200 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-300   focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                

                <span className="mx-2">Contribute on forum</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-800 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
               

                <span className="mx-2">Master Nutrition Quiz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
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
                  className="px-6 py-2.5 mt-6 text-sm  leading-5 text-center text-white capitalize bg-blue-800 rounded-lg hover:bg-blue-700 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Check out Forum
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-auto h-auto lg:w-1/2">
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
