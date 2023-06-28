import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackBtn";



const Answer = () => {
  const navigate = useNavigate();

  // Assuming you pass the currentQuestionIndex as a URL parameter
  const currentQuestionIndex = parseInt(useParams().questionIndex);

  // Access the current question and user's answer from state
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswerIndex = userAnswers[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.correctAnswerIndex;

  const isAnswerCorrect = userAnswerIndex === correctAnswerIndex;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      navigate(`/quiz/${currentQuestionIndex + 1}`);
    } else {
      navigate("/endquiz");
    }
  };

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
                Question {currentQuestionIndex + 1}/{questions.length}
              </p>
            </div>
            <div>
              <p className="text-center py-2  px-4 text-white text-xl ">
                {currentQuestion.questionText}
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-8 justify-center h-4/5 w-3/5 items-center  rounded-lg">
            <div>
              <p>
                {isAnswerCorrect ? "Correct!" : "Wrong!"}
              </p>
            </div>
            <div>
              <p>{currentQuestion.explanation}</p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={handleNextQuestion}
                className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-700  transform bg-gradient-to-br from-yellow-400 to-pink-500 hover:from-emerald-500 hover:to-blue-500 rounded-lg lg:w-auto  focus:outline-none focus:bg-blue-700"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
