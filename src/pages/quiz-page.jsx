import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackBtn";
import createClient from "@sanity/client";
import client from "../client";
import Loading from "../components/loading";

const QuizPage = () => {
  const navigate = useNavigate();
  // const client = createClient({
  //   projectId: "d5ukluc6",
  //   dataset: "production",
  //   token: "",
  //   useCdn: true,
  //   apiVersion: "2021-10-21"
  // });

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch all questions
        const query = `*[_type == "question"]`;
        const response = await client.fetch(query);

        // Shuffle the questions array
        const shuffledQuestions = shuffleArray(response);

        // Select only the first 4 questions
        const selectedQuestions = shuffledQuestions.slice(0, 4);

        setQuestions(selectedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswerSubmission = (selectedAnswerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;

    setUserAnswers([...userAnswers, selectedAnswerIndex]);

    if (selectedAnswerIndex === correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate(`/endquiz/${score}`);
    }
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <div className="flex flex-col gap-4 md:w-9/12 w-full shadow-2xl bg-white p-8 h-4/5 rounded-lg ">
          <div className="flex items-center m-6">
            <BackButton />
          </div>
          <div className="flex h-full content-center gap-5">
            <div className="flex-col space-y-5 justify-center bg-blue-800 shadow-xl shadow-blue-800 rounded-lg h-3/4 w-2/5 sm:w-1/2 ">
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
            <div className=" flex flex-col gap-4 justify-center h-4/5 w-3/5 items-center rounded-lg sm:w-1/2">
              {userAnswers.length > currentQuestionIndex && (
                <>
                  <div>
                    <p className="text-center text-xl">
                      Your answer:{" "}
                      {
                        currentQuestion.answers[
                          userAnswers[currentQuestionIndex]
                        ]
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-xl">
                      Correct answer:{" "}
                      {
                        currentQuestion.answers[
                          currentQuestion.correctAnswerIndex
                        ]
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-xl">
                      Explanation: {currentQuestion.explanation}
                    </p>
                  </div>
                </>
              )}
              {userAnswers.length <= currentQuestionIndex && (
                <ul className="space-y-5  p-4">
                  {currentQuestion.answers.map((answer, index) => (
                    <li className="px-2 py-3" key={index}>
                      <label>
                        <input
                          type="radio"
                          name="answer"
                          className="form-radio"
                          onClick={() => handleAnswerSubmission(index)}
                        />
                        <span className="ml-2 text-xl">{answer}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2 m-3 text-sm tracking-wider text-white uppercase transition-colors duration-700 transform bg-blue-800 rounded-lg lg:w-auto focus:outline-none focus:bg-blue-700"
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "Next"
                    : "Finish Quiz"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>{questions.length > 0 ? renderCurrentQuestion() : <Loading />}</div>
  );
};

export default QuizPage;

// {isAnswerCorrect ? "Correct!" : "Wrong!"}
// {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
