import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Page3.scss';
import infoImage from '../../assets/images/info.png'; // Personal icon image
import clubImage from '../../assets/images/club.jpg'; // Club image

export default function Page3() {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/users/details', {
          withCredentials: true, // 쿠키 전송 활성화
        });
        setUserInfo(response.data); // 사용자 정보 저장
        setLoading(false); // 로딩 상태 해제
      } catch (err) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', err);
        setError('사용자 정보를 불러올 수 없습니다. 다시 시도하세요.');
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <div className="page3-container">로딩 중...</div>;
  }

  if (error) {
    return <div className="page3-container">{error}</div>;
  }

  return (
    <div className="page3-container">
      <h1 className="page-title">내 정보</h1>

      {/* Personal Information Section */}
      <section className="personal-info-section">
        <h2 className="section-title">개인정보</h2>
        <div className="personal-info">
          <img src={infoImage} alt="Personal Icon" className="personal-icon" />
          <div className="personal-details">
            <p>{userInfo.name || '이름 없음'}</p>
            <p>{userInfo.department || '학과 정보 없음'}</p>
            <p>{userInfo.studentId || '학번 없음'}</p>
          </div>
        </div>
      </section>

      {/* Affiliated Clubs Section */}
      <section className="affiliated-clubs-section">
        <h2 className="section-title">소속 동아리</h2>
        {userInfo.affiliatedClub ? (
          <div className="club-card">
            <img src={clubImage} alt="Club" className="club-image" />
            <p className="club-name">{userInfo.affiliatedClub}</p>
          </div>
        ) : (
          <p className="no-club">소속된 동아리가 없습니다.</p>
        )}
      </section>

      {/* Pending Approval Clubs Section */}
      <section className="pending-approval-section">
        <h2 className="section-title">가입 승인전 동아리</h2>
        {userInfo.pendingClub ? (
          <div className="club-card">
            <img src={clubImage} alt="Pending Club" className="club-image" />
            <p className="club-name">{userInfo.pendingClub}</p>
          </div>
        ) : (
          <p className="no-club">가입 대기 중인 동아리가 없습니다.</p>
        )}
      </section>
    </div>
  );
}
