import { Routes, Route, useNavigate } from "react-router-dom";
import QuizPage from "./pages/quiz-page";
import Answer from "./pages/answerPage";
import LandingPage from "./pages/LandingPage";
import ForumPage from "./pages/Forum";
import NotFoundPage from "./pages/errorPage";
import ContactPage from "./pages/Contact";
import Team from "./pages/Team";
import StartPage from "./pages/start";
import EndPage from "./pages/EndPage";
import QuizComponent from "./pages/quizcomponent";
import NewsletterSection from "./pages/newsletter";
import SharredLayout from "./components/SharredLayout";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserProfile,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<SharredLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <div className="flex pt-9 items-center justify-center">
                    <UserProfile />
                  </div>
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Route>
        <Route
          path="/sign-in/*"
          element={
            <div className="flex  items-center h-screen justify-center">
              <SignIn routing="path" path="/sign-in" />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="flex  items-center h-screen justify-center">
              <SignUp routing="path" path="/sign-up" />
            </div>
          }
        />
        <Route
          path="/forum"
          element={
            <>
              <SignedIn>
                <ForumPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route path="quiz/:questionIndex" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizcomponent" element={<QuizComponent />} />
        <Route path="/quiz/:questionIndex/answer" element={<Answer />} />
        <Route path="/startquiz" element={<StartPage />} />
        <Route path="/endquiz/:score" element={<EndPage />} />
        <Route
          path="/newsletter"
          element={
            <>
              <SignedIn>
                <NewsletterSection />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClerkProvider>
  );
}

export default function App() {
  return <ClerkProviderWithRoutes />;
}
