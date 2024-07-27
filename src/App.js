import './App.css';
import Start from './pages/StartPage'
import Main from './pages/MainPage'
import ContestCheck from './pages/ContestCheck'
import ContestCheckSchool from './pages/ContestCheckSchool';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom


function App() {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/team1" element={<ContestCheck />} /> 
                    <Route path="/team2" element={<ContestCheckSchool />} />                                     

                </Routes>
            </Router>
 
  );
}

export default App;
