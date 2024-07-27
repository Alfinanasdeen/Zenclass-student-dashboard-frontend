import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboardContext from "./student-dashboard-context/StudentDashboardContext";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/Login/login";
import Forgot from "./pages/ForgetPassword/forget";
import Signup from "./pages/Signup/signup";
import Reset from "./pages/ResetPassword/reset";
import ConfirmUser from "./pages/UserConfirmation/UserConfirmation";
import SessionRoadmap from "./pages/session-roadmap/SessionRoadmap";
import Dashboard from "./pages/Dashboard/dashboard";
import Tasks from "./pages/Tasks/tasks";
import Webcode from "./pages/Webcode/webcode";
import Capstone from "./pages/Capstone/capstone";
import Queries from "./pages/Queries/queries";
import Requirements from "./pages/Requirements/Requirements";
import Portfolio from "./pages/Portfolio/Portfolio";
import Profile from "./pages/Profile/Profile";
import Application from "./pages/Application/Application";
import Interview from "./pages/Interview/Interview";
import Leave from "./pages/LeaveApplication/Leave";
import Mock from "./pages/MockInterview/mock";
import Certificate from "./pages/Certificate/Certificate";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Syllabus from "./pages/Syllabus/Syllabus";
import LoggedOut from "./pages/LoggedOut/LoggedOut";

function App() {
  const { user } = useContext(StudentDashboardContext);

  return (
    <>
      {/* Render Header and Navbar for authenticated users */}
      {user && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      {/* Define routes based on user authentication */}

      <Routes>
        {/* Routes for users not logged in */}
        {!user ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset/:id" element={<Reset />} />
            <Route path="/confirm/:id" element={<ConfirmUser />} />
            <Route path="*" element={<LoggedOut />} />
          </>
        ) : (
          <>
            <Route path="/" element={<SessionRoadmap />} />
            <Route path="/class" element={<SessionRoadmap />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task" element={<Tasks />} />
            <Route path="/webcode" element={<Webcode />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/application" element={<Application />} />
            <Route path="/interviewtasks" element={<Interview />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/mock" element={<Mock />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/learderboard" element={<Leaderboard />} />
            <Route path="/syllabus" element={<Syllabus />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
