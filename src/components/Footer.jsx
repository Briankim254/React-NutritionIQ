import React from "react";
import {Link, useNavigate} from 'react-router-dom';

const FooterNav = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white ">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl ">
            Subscribe our newsletter to get updated.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <button
              onClick={()=>navigate('/newsletter')}
              className="inline-flex shadow-xl items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-blue-800 rounded-lg gap-x-3 hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>

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

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div>
            <p className="font-semibold text-gray-800 ">
              Quick Links
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">
              Social
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                LinkedIn
              </a>
            
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">
              Legal
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                Privacy
              </a>
              
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">
              Contact Us
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                +254 711 201 903
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-800"
              >
                nutrition@kabarak.ac.ke
              </a>
            </div>
          </div>
        </div>                  

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <Link
              to="/"
              className="text-lg font-bold tracking-tighter text-blue-800 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            >
              Nutrition-IQ
            </Link>                                

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
            © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
