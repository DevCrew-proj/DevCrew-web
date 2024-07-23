import "./App.css";
import Start from "./pages/StartPage";
import Main from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
