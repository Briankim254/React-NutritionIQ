import React from 'react'

export default function demo() {
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
        <div className=" flex flex-col gap-4 justify-center h-4/5 w-3/5 items-center rounded-lg sm:w-full">
          {userAnswers.length > currentQuestionIndex && (
            <>
              {isAnswerCorrect ? <p className="text-center text-xl text-emerald-600 "> Correct!</p> : <p className="text-center text-xl text-rose-600"> Wrong!</p>}
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
  )
}
