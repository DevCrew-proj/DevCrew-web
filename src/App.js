import "./App.css";
import Start from "./pages/StartPage";
import Main from "./pages/MainPage";
import Communication1 from "./pages/CommunicationPage1";
import CommunicationChat1 from "./pages/CommunicationChatPage1";
import Communication2 from "./pages/CommunicationPage2";
import CommunicationChat2 from "./pages/CommunicationChatPage2.js/index.js";
import Communication3 from "./pages/CommunicationPage3";
import CommunicationChat3 from "./pages/CommunicationChatPage3.js";
import Communication4 from "./pages/CommunicationPage4";
import CommunicationChat4 from "./pages/CommunicationChatPage4";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/main' element={<Main />} />
        <Route path='/communication1' element={<Communication1 />} />
        <Route path='/communicationChat1' element={<CommunicationChat1 />} />
        <Route path='/communication2' element={<Communication2 />} />
        <Route path='/communicationChat2' element={<CommunicationChat2 />} />
        <Route path='/communication3' element={<Communication3 />} />
        <Route path='/communicationChat3' element={<CommunicationChat3 />} />
        <Route path='/communication4' element={<Communication4 />} />
        <Route path='/communicationChat4' element={<CommunicationChat4 />} />
      </Routes>
    </Router>
  );
}

export default App;
