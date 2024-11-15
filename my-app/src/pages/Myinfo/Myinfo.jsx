import React from "react";
import "./Myinfo.scss";

function Myinfo() {
    return (
    <div className="myinfo-container">
      {/* Header */}
        <header className="myinfo-header">
        <div className="myinfo-logo">KWCLUB</div>
        <h1>내 정보</h1>
        </header>

      {/* Personal Information Section */}
        <section className="personal-info">
        <h2>개인정보</h2>
        <div className="personal-details">
            <div className="icon-placeholder">
            <img src="/path/to/icon-placeholder.png" alt="User Icon" />
            </div>
            <div className="details-text">
            <p className="name">김 팡팡</p>
            <p className="department">정보융합학부</p>
            <p className="grade">학번</p>
            </div>
        </div>
        </section>

      {/* Club Information Section */}
        <section className="club-info">
        <h2>소속 동아리</h2>
        <div className="club-card">
            <img src="/path/to/club-logo.png" alt="Ice Unicorns Logo" />
            <p>아이스 하키부</p>
        </div>
        </section>

      {/* Pending Clubs Section */}
        <section className="pending-clubs">
        <h2>가입 승인전 동아리</h2>
        <div className="pending-card">
            <img src="/path/to/pending-club-logo.png" alt="Pending Club Logo" />
            <p>아이스 하키부</p>
        </div>
        </section>

      {/* Bottom Navigation */}
        <footer className="bottom-navbar">
        <nav>
            <a href="/home" className="nav-item">홈</a>
            <a href="/search" className="nav-item">검색</a>
          <a href="/profile" className="nav-item active">내 정보</a>
          <a href="/settings" className="nav-item">설정</a>
        </nav>
      </footer>
    </div>
  );
}

export default Myinfo;
