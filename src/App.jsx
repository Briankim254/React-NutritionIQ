import { Routes, Route } from "react-router-dom";
import React from "react";
import LoginForm from "./pages/LoginForm";
import QuizPage from "./pages/quiz-page";
import LandingPage from "./pages/LandingPage";
import ForumPage from "./pages/Forum";
import SignupForm from "./pages/SignUp";
import NotFoundPage from "./pages/errorPage";
import ContactPage from "./pages/Contact";
import Team from "./pages/Team";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
