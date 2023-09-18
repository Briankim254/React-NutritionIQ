import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackBtn";
import client from "../client";
import Loading from "../components/loading";
import { RadioGroup } from "@headlessui/react";
const plans2 = ["Statup", "Business", "Enterprise"];


const QuizPage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

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

    if (selectedAnswerIndex === correctAnswerIndex) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

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
  const [selected2, setSelected2] = useState(plans2[0]);


  const renderCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-100">
        <div className="flex flex-col gap-4 md:w-9/12 w-full max-w-2xl shadow-2xl bg-white p-8 rounded-lg">
          <div className="flex items-center m-6">
            <BackButton />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-col space-y-5 justify-center bg-blue-800 md:shadow-xl md:shadow-blue-800 rounded-lg p-4 md:w-1/2 sm:w-3/4">
              <div>
                <p className="text-center py-2 px-3 text-gray-300 text-xl">
                  Question {currentQuestionIndex + 1}/{questions.length}
                </p>
              </div>
              <div>
                <p className="text-center py-2 px-4 text-white text-xl">
                  {currentQuestion.questionText}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center w-full">
              {userAnswers.length > currentQuestionIndex && (
                <>
                  {isAnswerCorrect ? (
                    <p className="text-center text-xl text-emerald-600">
                      Correct!
                    </p>
                  ) : (
                    <p className="text-center text-xl text-rose-600">Wrong!</p>
                  )}
                  <div>
                    <p className="text-center text-xl">
                      The Correct answer:{" "}
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
                <>
                 <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={selected2} onChange={setSelected2}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {plans2.map((plan) => (
                <RadioGroup.Option
                  key={plan}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {plan}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
                  <ul className="space-y-5 p-4">
                    {currentQuestion.answers.map((answer, index) => (
                      <li className="px-2 py-3" key={index}>
                        <label htmlFor={`answer-${index}`}>
                          <div className="flex items-center pl-4 border border-gray-200 rounded ">
                            <input
                              id={`answer-${index}`}
                              type="radio"
                              name="answer"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  da focus:ring-2  "
                              onClick={() => handleAnswerSubmission(index)}
                            />
                            <span className="ml-2 text-xl">{answer}</span>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex items-center justify-center">
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

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default QuizPage;

// {isAnswerCorrect ? "Correct!" : "Wrong!"}
// {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
