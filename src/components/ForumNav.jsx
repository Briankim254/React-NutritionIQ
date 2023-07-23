import { useState } from "react";
import Logo from "../components/logo";
import { NavLink } from "react-router-dom";
import { UserButton, SignedIn, SignInButton, SignedOut } from "@clerk/clerk-react";

const ForumNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="sticky backdrop-blur top-0 z-10 rounded-xl  shadow "
      x-data="{ isOpen: false }"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="flex lg:hidden">
              <button
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
                onClick={toggleMenu}
                type="button"
                x-cloak
              >
                <svg
                  className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            x-cloak
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Join Slack
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Browse Topics
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Random Story
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
              >
                Experts
              </a>
              <SignedIn>
              <NavLink
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
                to="/profile"
              >
                Profile
              </NavLink>
            </SignedIn>
            </div>
            
            <SignedOut>
              <NavLink
                to="/forum"
                className="px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-800 rounded-lg hover:bg-blue-700 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Sign In
              </NavLink>
            </SignedOut>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ForumNavigation;
