import Landing from "./components/landing";
import LearnAboutDis from "./components/learnAboutDis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/chat_App/NavBar";
import ChatBox from "./components/chat_App/ChatBox";
import Welcome from "./components/chat_App/Welcome";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/learn" element={<LearnAboutDis />} />
          <Route
            path="/chat"
            element={
              <>
                <NavBar />
                {!user ? <Welcome /> : <ChatBox />}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
