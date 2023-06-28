import { Routes, Route } from "react-router-dom";
import React from "react";
import LoginForm from "./pages/LoginForm";
import QuizPage from "./pages/quiz-page";
import Answer from "./pages/answerPage";
import LandingPage from "./pages/LandingPage";
import ForumPage from "./pages/Forum";
import SignupForm from "./pages/SignUp";
import NotFoundPage from "./pages/errorPage";
import ContactPage from "./pages/Contact";
import Team from "./pages/Team";
import StartPage from "./pages/start";
import EndPage from "./pages/EndPage";
import QuizComponent from "./pages/quizcomponent";
import NewsletterSection from "./pages/newsletter";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="quiz/:questionIndex" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizcomponent" element={<QuizComponent />} />
        <Route path="/quiz/:questionIndex/answer" element={<Answer />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/startquiz" element={<StartPage />} />
        <Route path="/endquiz/:score" element={<EndPage />} />
        <Route path="/newsletter" element={<NewsletterSection />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
