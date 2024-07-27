import './App.css';
import Start from './pages/StartPage'
import Main from './pages/MainPage'
import CommunityBoard1 from './pages/CommunityBoard1.jsx';
import CommunityBoard2 from './pages/CommunityBoard2.jsx';
import CommunityBoard3 from './pages/CommunityBoard3.jsx';
import CommunityBoard4 from './pages/CommunityBoard4.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom


function App() {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/CommunityBoard1" element={<CommunityBoard1 />} />   
                    <Route path="/CommunityBoard2" element={<CommunityBoard2 />} />
                    <Route path="/CommunityBoard3" element={<CommunityBoard3 />} />   
                    <Route path="/CommunityBoard4" element={<CommunityBoard4 />} /> 

                                      
                </Routes>
            </Router>
 
  );
}

export default App;
