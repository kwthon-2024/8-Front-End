import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // 하단 네비게이션 바 import
import "./Page4.scss";
import kwImage from '../../assets/images/kw.jpg';

export default function Page4() {
  const settingsOptions = [
    { name: '내정보 수정', path: '/profile' },
    { name: '동아리 등록', path: '/club-registration' },
    { name: '동아리 탈퇴', path: '/club-leave' },
    { name: '동아리 권한 수정', path: '/club-permission' },
    { name: '동아리 정보 수정', path: '/club-info-edit' },
    { name: '로그아웃', path: '/logout' },
  ];

  return (
    <div className="page4">
      <div className="header">
        <h1>설정</h1>
      </div>
      <div className="settings-list">
        {settingsOptions.map((option, index) => (
          <Link key={index} to={option.path} className="settings-item-link">
            <div className="settings-item">
              {option.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="settings-list">
          <img src={kwImage} alt="kwimg" className="kw-img" />
      </div>
      <Navbar /> {/* 하단 네비게이션 바 */}
    </div>
  );
}