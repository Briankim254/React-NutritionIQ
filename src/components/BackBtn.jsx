import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex shadow-xl items-center gap-2 space-x-2 px-3 py-2 text-2xl font-semibold text-blue-800 backdrop-blur-md rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
    >
      <svg width="28" height="28" viewBox="0 0 44 44" className="fill-blue-800">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8571 43.8571C9.78578 43.8571 0 34.0713 0 22C0 9.9286 9.78578 0.142822 21.8571 0.142822C33.9285 0.142822 43.7143 9.9286 43.7143 22C43.7143 34.0713 33.9285 43.8571 21.8571 43.8571ZM21.8571 39.883C31.7337 39.883 39.7403 31.8765 39.7403 21.9999C39.7403 12.1233 31.7337 4.11677 21.8571 4.11677C11.9806 4.11677 3.97403 12.1233 3.97403 21.9999C3.97403 31.8765 11.9806 39.883 21.8571 39.883ZM22.4392 31.353L25.2492 28.5429L18.7062 21.9999L25.2492 15.4569L22.4392 12.6468L13.0861 21.9999L22.4392 31.353Z"
          fill="#2314A7"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
