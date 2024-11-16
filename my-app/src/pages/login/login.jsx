import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import logo from '../../assets/images/logo.png';

function LoginPage({ setIsAuthenticated }) {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 2초 후에 로그인 폼을 표시하도록 상태를 변경
        const timer = setTimeout(() => {
            setShowLoginForm(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = async () => {


        if (studentId && password) {
            try {
                console.log(studentId, password)
                // 백엔드 로그인 API 호출
                const response = await axios.post('http://localhost:8086/api/auth/login', {
                    studentId,
                    password
                },
                );

                // 로그인 성공 시
                if (response.status === 200) {
                    setIsAuthenticated(true); // 로그인 상태 설정
                    navigate('/'); // 메인 페이지로 이동
                }
            } catch (error) {
                // 로그인 실패 시 처리
                if (error.response && error.response.status === 401) {
                    alert('잘못된 학번 또는 비밀번호입니다.');
                } else {
                    console.error('로그인 오류:', error);
                    alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
                }
            }
        } else {
            alert('학번과 비밀번호를 입력하세요.');
        }
    };

    return (
        <div className="login-page">
            <div className={`logo-container ${showLoginForm ? 'move-up' : ''}`}>
                <img src={logo} alt="KW CLUB Logo" className="logo" />
                <h2>KW CLUB Community</h2>
            </div>
            {showLoginForm && (
                <div className="login-form">
                    <input
                        type="text"
                        placeholder="학번"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={handleLogin} className="login-button">Login</button>
                    <div className="links">
                        <Link to="/signup"><b>회원가입</b></Link>
                        <a href="/find-account"><b>아이디/비번 찾기</b></a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
