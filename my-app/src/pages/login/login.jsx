// src/pages/Login/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

function LoginPage({ setIsAuthenticated }) {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (studentId && password) {
            setIsAuthenticated(true); // 로그인 상태 설정
            navigate('/'); // 로그인 후 메인 페이지로 이동
        } else {
            alert('학번과 비밀번호를 입력하세요.');
        }
    };

    return (
        <div className="login-container">
            <h2>로그인</h2>
            <input 
                type="text" 
                placeholder="학번" 
                value={studentId} 
                onChange={(e) => setStudentId(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default LoginPage;
