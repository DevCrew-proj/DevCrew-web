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
import Communication1 from "./pages/CommunicationPage1";
import CommunicationChat1 from "./pages/CommunicationChatPage1";
import Communication2 from "./pages/CommunicationPage2";
import CommunicationChat2 from "./pages/CommunicationChatPage2.js";
import Communication3 from "./pages/CommunicationPage3.js";
import CommunicationChat3 from "./pages/CommunicationChatPage3.js";
import Communication4 from "./pages/CommunicationPage4.js";
import CommunicationChat4 from "./pages/CommunicationChatPage4.js";
import CommunityBoard1 from './pages/CommunityBoard1.jsx';
import CommunityBoard2 from './pages/CommunityBoard2.jsx';
import CommunityBoard3 from './pages/CommunityBoard3.jsx';
import CommunityBoard4 from './pages/CommunityBoard4.jsx';

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
                    <Route path='/communication1' element={<Communication1 />}>
                      <Route path=':id' element={<Communication1 />} />
                    </Route>
                    <Route path='/communicationChat1' element={<CommunicationChat1 />} />
                    <Route path='/communication2' element={<Communication2 />} />
                    <Route path='/communicationChat2' element={<CommunicationChat2 />} />
                    <Route path='/communication3' element={<Communication3 />}>
                      <Route path=':id' element={<Communication3 />} />
                    </Route>
                    <Route path='/communicationChat3' element={<CommunicationChat3 />} />
                    <Route path='/communication4' element={<Communication4 />} />
                    <Route path='/communicationChat4' element={<CommunicationChat4 />} />
                    <Route path="/CommunityBoard1" element={<CommunityBoard1 />} />   
                    <Route path="/CommunityBoard2" element={<CommunityBoard2 />} />
                    <Route path="/CommunityBoard3" element={<CommunityBoard3 />} />   
                    <Route path="/CommunityBoard4" element={<CommunityBoard4 />} /> 
            </Routes>
        </Router>
    );
}

export default App;
