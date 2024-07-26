import "./App.css";
import Start from "./pages/StartPage";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
