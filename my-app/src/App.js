import React, { useState } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Main/MainPage";
import SportsPage from "./pages/sports/SportsPage";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import SearchPage from "./pages/Search/SearchPage";
import LoginPage from "./pages/login/login";
import SignupPage from "./pages/Signup/signup";
import ClubRegistrationPage from "./pages/ClubRegistrationPage/ClubRegistrationPage";
import ClubDetailPage from "./pages/ClubDetailPage/ClubDetailPage";
import ChatPage from "./pages/chat/chat"; // ChatPage import
import ClubR from './pages/ClubR/ClubR'; // ClubR 페이지 import

const Layout = ({ isAuthenticated }) => (
  <div className="page">
    {/* <Header /> 삭제됨 */}
    <div className="wrap">
      <Outlet />
    </div>
    <Navbar />
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route element={<Layout isAuthenticated={isAuthenticated} />}>
        <Route path="/pages/login/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/sports" element={isAuthenticated ? <SportsPage /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/page1" element={isAuthenticated ? <Page1 /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/page2" element={isAuthenticated ? <Page2 /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/page3" element={isAuthenticated ? <Page3 /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/page4" element={isAuthenticated ? <Page4 /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/search" element={isAuthenticated ? <SearchPage /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/club-registration" element={isAuthenticated ? <ClubRegistrationPage /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/club/:id" element={isAuthenticated ? <ClubDetailPage /> : <Navigate to="/pages/login/login" replace />} />
        <Route path="/club/:id/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/pages/login/login" replace />} /> {/* ChatPage route */}
        <Route path="/clubR/:id" element={isAuthenticated ? <ClubR /> : <Navigate to="/pages/login/login" replace />} /> {/* ClubR route */}
        <Route path="*" element={<Navigate to="/pages/login/login" replace />} />
      </Route>
    </Routes>
  );
}

export default App;