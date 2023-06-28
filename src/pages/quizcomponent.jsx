import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: "d5ukluc6",
    dataset: 'production',
  // Add any other required configuration options
});

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch questions from Sanity
    const fetchQuestions = async () => {
      try {
        const query = `*[_type == "question"]`;
        const response = await client.fetch(query);
        setQuestions(response);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSubmission = (selectedAnswerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;

    setUserAnswers([...userAnswers, selectedAnswerIndex]);

    if (selectedAnswerIndex === correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuizResult = () => {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Your Total Score: {score}</p>
      </div>
    );
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.questionText}</p>
        <ul>
          {currentQuestion.answers.map((answer, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerSubmission(index)}>{answer}</button>
            </li>
          ))}
        </ul>
        {userAnswers.length > currentQuestionIndex && (
          <div>
            <p>Your Answer: {currentQuestion.answers[userAnswers[currentQuestionIndex]]}</p>
            <p>Explanation: {currentQuestion.explanation}</p>
          </div>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next Question</button>
        ) : (
          renderQuizResult()
        )}
      </div>
    );
  };

  return <div>{questions.length > 0 ? renderCurrentQuestion() : <p>Loading...</p>}</div>;
};

export default QuizComponent;
