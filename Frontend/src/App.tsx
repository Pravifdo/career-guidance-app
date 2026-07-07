import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Internships from "./pages/Internships/Internships";
import Contact from "./pages/Contact/Contact";
import CvMain from "./pages/cvpage/cvmain";
import CoverLetter from "./pages/CoverLetterpage/Assignmentmain";
import FinalProject from "./pages/FinalProject.jsx/FinalProject";
import ProjectProposal from "./pages/projectProposal/projectProposalmain";
import Assignment from "./pages/Assignment/Assignmentmain";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/cv-writing" element={<CvMain />} />
        <Route path="/services/cover-letter" element={<CoverLetter />} />
        <Route path="/services/fyp-report" element={<FinalProject />} />
        <Route path="/services/proposal" element={<ProjectProposal />} />
        <Route path="/services/assignments" element={<Assignment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
