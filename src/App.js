import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom
import "./App.css";
import Start from "./pages/StartPage";
import Main from "./pages/MainPage";
import DevcrewIntroPage from "./pages/DevcrewIntroPage";
import ContestCheck from "./pages/ContestCheck";
import ContestCheckSchool from "./pages/ContestCheckSchool";
import Login from "./pages/LoginPage";
import Signin from "./pages/SigninPage";
import SigninBusiness from "./pages/SigninBusinessPage";
import PortfolioPage from "./pages/PortfolioPage";
import IntroduceSelfPage from "./pages/IntroduceSelfPage.js";
import Communication1 from "./pages/CommunicationPage1";
import CommunicationBoard1 from "./pages/CommunicationBoard1.js";
import CommunicationChat1 from "./pages/CommunicationChatPage1";
import Communication2 from "./pages/CommunicationPage2";
import CommunicationBoard2 from "./pages/CommunicationBoard2.js";
import CommunicationChat2 from "./pages/CommunicationChatPage2.js";
import Communication3 from "./pages/CommunicationPage3.js";
import CommunicationBoard3 from "./pages/CommunicationBoard3.js";
import CommunicationChat3 from "./pages/CommunicationChatPage3.js";
import Communication4 from "./pages/CommunicationPage4.js";
import CommunicationBoard4 from "./pages/CommunicationBoard4.js";
import CommunicationChat4 from "./pages/CommunicationChatPage4.js";
import ContestUpload from "./pages/ContestUpload.js";
import TeamComposition from "./pages/TeamCompositionPage.js";
import TeamMatching from "./pages/TeamMatching.js";
import ProjectWritePage from "./pages/ProjectWritePage.js";
import TeamApplication from "./pages/TeamApplicationPage.js";
import KakaoAuth from "./pages/KakaoAuth.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/main' element={<Main />} />
        <Route path='/team1' element={<ContestCheck />} />
        <Route path='/team2' element={<ContestCheckSchool />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signinbusiness' element={<SigninBusiness />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/projectWrite' element={<ProjectWritePage />} />
        {/* <Route path='/introduce' element={<IntroducePage />} /> */}
        <Route path='/introduceself' element={<IntroduceSelfPage />} />
        <Route path='/teamComposition' element={<TeamComposition />} />
        <Route path='/communication1' element={<Communication1 />} />
        <Route path='/communicationBoard1' element={<CommunicationBoard1 />} />
        <Route
          path='/communicationChat1/:id'
          element={<CommunicationChat1 />}
        />
        <Route path='/communication2' element={<Communication2 />} />
        <Route path='/communicationBoard2' element={<CommunicationBoard2 />} />
        <Route
          path='/communicationChat2/:id'
          element={<CommunicationChat2 />}
        />
        <Route path='/communication3' element={<Communication3 />} />
        <Route path='/communicationBoard3' element={<CommunicationBoard3 />} />
        <Route
          path='/communicationChat3/:id'
          element={<CommunicationChat3 />}
        />
        <Route path='/communication4' element={<Communication4 />} />
        <Route path='/communicationBoard4' element={<CommunicationBoard4 />} />
        <Route
          path='/communicationChat4/:id'
          element={<CommunicationChat4 />}
        />
        <Route path='/contestupload' element={<ContestUpload />} />
        <Route path='/devcrewintro' element={<DevcrewIntroPage />} />
        <Route path='/teammatching' element={<TeamMatching />} />
        <Route path='/teamApplication' element={<TeamApplication />} />
        <Route path='/api/social-login' element={<KakaoAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
