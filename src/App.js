import './App.css';
import Start from './pages/StartPage'
import Main from './pages/MainPage'
import ContestCheck from './pages/ContestCheck'
import ContestCheckSchool from './pages/ContestCheckSchool';
import Login from "./pages/LoginPage";
import Signin from "./pages/SigninPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom
import PortfolioPage from "./pages/PortfolioPage";
import IntroducePage from "./pages/IntroducePage";

function App() {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/team1" element={<ContestCheck />} /> 
                    <Route path="/team2" element={<ContestCheckSchool />} />                                     
                   <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                   <Route path="/introduce" element={<IntroducePage />} />
            </Routes>
        </Router>
    );
}

export default App;
