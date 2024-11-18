
import React from 'react';
import './Page3.scss';
import infoImage from '../../assets/images/info.png'; // Personal icon image
import clubImage from '../../assets/images/club.jpg'; // Club image

export default function Page3() {
  return (
    <div className="page3-container">
      <h1 className="page-title">내 정보</h1>

      <section className="personal-info-section">
        <h2 className="section-title">개인정보</h2>
        <div className="personal-info">
          <img src={infoImage} alt="Personal Icon" className="personal-icon" />
          <div className="personal-details">
            <p>김 팡팡</p>
            <p>정보융합학부</p>
            <p>학번</p>
          </div>
        </div>
      </section>

      <section className="affiliated-clubs-section">
        <h2 className="section-title">소속 동아리</h2>
        <div className="club-card">
          <img src={clubImage} alt="Club" className="club-image" />
          <p className="club-name">아이스 하키부</p>
        </div>
      </section>

      <section className="pending-approval-section">
        <h2 className="section-title">가입 승인전 동아리</h2>
        <div className="club-card">
          <img src={clubImage} alt="Pending Club" className="club-image" />
          <p className="club-name">아이스 하키부</p>
        </div>
      </section>
    </div>
  );
}
