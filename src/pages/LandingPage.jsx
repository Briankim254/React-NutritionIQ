import React from "react";
import Navigation from "../components/Navigation";
import FooterNav from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-slate-800 rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="/sweet-life-OxkxluMeAGs-unsplash.jpg"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase rounded-full bg-teal-accent-400">
                Elevate Your Health
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-xl">
              Unlock Your Nutritional Potential with Nutrition IQ.
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Join our community</span> of diabetics
              who are living healthier, happier lives with the help of our
              nutrition web app.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/quiz")}
                className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white  rounded-xl shadow-xl bg-blue-800 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
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
      <FooterNav />
    </>
  );
};

export default LandingPage;
