import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // 헤더 스타일 파일 import
import logo from '../../assets/images/logo.png'; // 로고 이미지 경로

export default function Header() {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  return (
    <div className="header-container">
      <div className="header-content" onClick={() => navigate('/mainPage')} style={{ cursor: 'pointer' }}>
        <img
          src={logo}
          alt="KW CLUB"
          className="header-logo"
        />
        <h1 className="header-title">동아리 커뮤니티</h1>
      </div>
      <hr className="header-divider" /> {/* 헤더 하단 선 */}
    </div>
  );
}