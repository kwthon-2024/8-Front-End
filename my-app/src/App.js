import React, { useState } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
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

const Layout = () => (
  <div className="page">
    <Header />
    <div className="wrap">
      <Outlet />
    </div>
    <Navbar />
  </div>
);

function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Routes>
            {/* Layout을 모든 페이지에 적용 */}
            <Route element={<Layout />}>
                {/* 로그인 페이지 경로 */}
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

                {/* 회원가입 페이지 경로 */}
                <Route path="/signup" element={<SignupPage />} />

                {/* 인증된 사용자만 접근 가능한 페이지 설정 */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <MainPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/page1"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Page1 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/page2"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Page2 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/page3"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Page3 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/page4"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Page4 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <SearchPage />
                        </ProtectedRoute>
                    }
                />

                {/* 정의되지 않은 경로에 접근 시 로그인 페이지로 리다이렉트 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
        </Routes>
    );
}

export default App;