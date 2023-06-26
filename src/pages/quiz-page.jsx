import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackBtn";

const QuizPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col gap-4 w-9/12 shadow-2xl bg-white p-8 h-4/5 rounded-lg ">
        <div className="flex items-center m-6">
          <BackButton />
        </div>
        <div className="flex  h-full content-center gap-5">
          <div className=" bg-blue-800 shadow-2xl rounded-lg h-3/4  w-1/2 pr-4">
            <div>
              <p className="text-center  py-8 px-3 text-white text-xl">
                Diabetics who exercise should consume more carbohydrates than
                those who do not exercise.
              </p>
            </div>
          </div>
          <div className="w-3/4 items-center p-4 rounded-lg">
            <ul className="space-y-6 ">
              <li>
                <label className="flex items-center">
                  <input type="radio" name="answer" className="form-radio" />
                  <span className="ml-2">True</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="radio" name="answer" className="form-radio" />
                  <span className="ml-2">False</span>
                </label>
              </li>
              {/* Add more answer options here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
