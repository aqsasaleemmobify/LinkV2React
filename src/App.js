import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import DeveloperSubmission from "./pages/developerSubmission";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/developerSubmission" element={<DeveloperSubmission />} />
    </Routes>
  );
}

export default App;
