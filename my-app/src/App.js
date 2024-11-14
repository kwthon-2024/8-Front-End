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
    const location = useLocation();

    // 인증되지 않은 상태로 기본 경로("/")에 접근 시 로그인 페이지로 리다이렉트
    if (!isAuthenticated && location.pathname !== "/login") {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Routes>
                {/* 로그인 페이지 경로 */}
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

                {/* 인증된 사용자만 접근 가능한 페이지 설정 */}
                <Route element={<Layout />}>
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
                </Route>
                
                {/* 정의되지 않은 경로에 접근 시 로그인 페이지로 리다이렉트 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </>
    );
}

export default App;