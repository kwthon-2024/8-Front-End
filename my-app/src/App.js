import React, { useState } from "react";
import { Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import MainPage from "./pages/Main/MainPage";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import SearchPage from "./pages/Search/SearchPage";
import LoginPage from "./pages/login/login"; // 로그인 페이지
import SignupPage from "./pages/Signup/signup"; // 회원가입 페이지

// Layout 컴포넌트 정의
const Layout = ({ isAuthenticated }) => {
    const location = useLocation();

    // 로그인 페이지 경로에서만 헤더와 네비게이션 바를 숨김
    const hideComponentsPaths = ["/pages/login/login"];
    const hideComponents = hideComponentsPaths.includes(location.pathname);

    return (
        <div className="page">
            {!hideComponents && isAuthenticated && <Header />}
            <div className="wrap">
                <Outlet />
            </div>
            {!hideComponents && isAuthenticated && <Navbar />}
        </div>
    );
};

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Routes>
            <Route element={<Layout isAuthenticated={isAuthenticated} />}>
                {/* 로그인 페이지 경로 */}
                <Route path="/pages/login/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/signup" element={<SignupPage />} />
                
                {/* 인증된 사용자만 접근 가능한 페이지 설정 */}
                <Route
                    path="/"
                    element={isAuthenticated ? <MainPage /> : <Navigate to="/pages/login/login" replace />}
                />
                <Route
                    path="/page1"
                    element={isAuthenticated ? <Page1 /> : <Navigate to="/pages/login/login" replace />}
                />
                <Route
                    path="/page2"
                    element={isAuthenticated ? <Page2 /> : <Navigate to="/pages/login/login" replace />}
                />
                <Route
                    path="/page3"
                    element={isAuthenticated ? <Page3 /> : <Navigate to="/pages/login/login" replace />}
                />
                <Route
                    path="/page4"
                    element={isAuthenticated ? <Page4 /> : <Navigate to="/pages/login/login" replace />}
                />
                <Route
                    path="/search"
                    element={isAuthenticated ? <SearchPage /> : <Navigate to="/pages/login/login" replace />}
                />

                {/* 정의되지 않은 경로에 접근 시 로그인 페이지로 리다이렉트 */}
                <Route path="*" element={<Navigate to="/pages/login/login" replace />} />
            </Route>
        </Routes>
    );
}

export default App;