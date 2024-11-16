import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io"; // 뒤로가기 아이콘 import
import { useNavigate } from 'react-router-dom';
import './ClubR.scss';
import logoImage from '../../assets/images/club.jpg'; // 동아리 로고 이미지
import i1Image from '../../assets/images/i1.JPG'; // 활동 사진 1
import i2Image from '../../assets/images/i2.png'; // 활동 사진 2

function ClubR() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const randomAuthors = ['김민수', '박지훈', '이영희', '최은정', '정호석']; // 임의의 작성자 목록

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      const randomAuthor = randomAuthors[Math.floor(Math.random() * randomAuthors.length)]; // 임의의 작성자 선택
      setReviews([...reviews, { content: newReview, author: randomAuthor }]);
      setNewReview('');
    }
  };

  return (
    <div className="club-detail-container">
      <div className="custom-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <div className="header-content">
          <img src={logoImage} alt="동아리 로고" className="header-logo" />
          <h1>유니콘스</h1>
        </div>
      </div>

      <h2 className="section-hashtag">#중앙 동아리</h2>
      <h2 className="club-title">유니콘스</h2>
      <p className="club-subtitle">아이스하키 동아리</p>

      <img src={i1Image} alt="활동 사진 1" className="club-image" />
      <div className="details-section">
        <p><strong>일시</strong></p>
        <p>화요일 - 20:30 ~ 22:00</p>
        <p>토요일 - 17:30 ~ 19:00</p>

        <p><strong>장소</strong> - 광운대 링크장</p>
        <p>선수출신 감독님과 코치님과의 전문적인 운동</p>
      </div>

      <h2 className="section-title">타대학과 친선전 교류</h2>
      <img src={i2Image} alt="활동 사진 2" className="club-image" />

      {/* 리뷰 섹션 */}
      <div className="review-section">
        <h2 className="section-title">리뷰</h2>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              {review.content} - <em>{review.author}</em>
            </li>
          ))}
        </ul>
        <div className="review-input-container">
          <input
            type="text"
            placeholder="리뷰를 작성하세요..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="review-input"
          />
          <button onClick={handleReviewSubmit} className="submit-review-button">등록</button>
        </div>
      </div>

      {/* 고정된 하단 버튼 */}
      <div className="fixed-footer">
        <button className="support-button">동아리 지원하기</button>
      </div>
    </div>
  );
}

export default ClubR;