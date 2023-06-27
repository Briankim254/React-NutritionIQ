import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackBtn";

const QuizPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="flex flex-col gap-4 w-9/12 shadow-2xl bg-white p-8 h-4/5 rounded-lg ">
        <div className="flex items-center m-6">
          <BackButton />
        </div>
        <div className="flex  h-full content-center gap-5">
          <div className="flex-col space-y-5 justify-center bg-blue-800 shadow-xl shadow-blue-800 rounded-lg h-3/4  w-2/5 ">
            <div className="">
              <p className="align-top text-center py-2 px-3 text-gray-300 text-xl">
                Question1/3
              </p>
            </div>
            <div>
              <p className="text-center py-2  px-4 text-white text-xl ">
                Diabetics who exercise should consume more carbohydrates than
                those who do not exercise?
              </p>
            </div>
          </div>
          <div className=" flex justify-center h-4/5 w-3/5 items-center  rounded-lg">
            <ul className="space-y-5  p-4">
              <li className="flex items-center justify-center px-2 py-3">
                <label>
                  <input type="radio" name="answer" className="form-radio" />
                  <span className="ml-2 text-xl">True</span>
                </label>
              </li>
              <li className="flex items-center text-center  p-2">
                <label>
                  <input type="radio" name="answer" className="form-radio" />
                  <span className="ml-2 text-xl ">False</span>
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
