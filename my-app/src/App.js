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
import LoginPage from "./pages/login/login";

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
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
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
            </Routes>
        </>
    );
}

export default App;