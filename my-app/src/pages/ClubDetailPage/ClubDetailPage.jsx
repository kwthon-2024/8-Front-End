import React from 'react';
import { IoIosArrowBack } from "react-icons/io"; // Import back icon
import { useNavigate, Link } from 'react-router-dom'; // Add Link import
import './ClubDetailPage.scss';
import clubLogo from '../../assets/images/club.jpg'; // Main logo image
import clubMeetingImage from '../../assets/images/club2.png'; // Image for the meeting

function ClubDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="club-detail-container">
      <div className="custom-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <div className="header-content">
          <img src={clubLogo} alt="Club Logo" className="header-logo" />
          <h1>유니콘스</h1>
        </div>
      </div>

      <h2 className="section-title">공지사항</h2>
      <div className="announcement-section">
        <div className="announcement-box">
          <p>한양대 하키부 친선 경기가 예정되어 있습니다..</p>
        </div>
      </div>

      <h2 className="section-title">정기모임</h2>
      <div className="meeting-section">
        <div className="meeting-card">
          <div className="meeting-info">
            <img src={clubMeetingImage} alt="Meeting" className="meeting-logo" />
            <div className="meeting-details">
              <p><strong>11/16 (토)</strong> 한양대 하키부 친선 경기</p>
              <p><strong>일시:</strong> 11/16 (토) 17:30</p>
              <p><strong>위치:</strong> 광운대 링크장</p>
              <p><strong>참석:</strong> 15/20</p>
            </div>
          </div>
          <button className="attend-button">참가 신청</button>
        </div>
      </div>

      <div className="additional-links">
        <Link to="/club/:id/chat" className="link-box">
          <p>채팅</p>
        </Link>
        <div className="link-box">
          <p>일정</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetailPage;