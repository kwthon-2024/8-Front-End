import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io"; // 뒤로가기 아이콘
import { useNavigate } from 'react-router-dom'; // React Router navigate
import './ClubR.scss';
import logoImage from '../../assets/images/club.jpg'; // 로고 이미지
import i1Image from '../../assets/images/i1.JPG'; // 활동 사진 1
import i2Image from '../../assets/images/i2.png'; // 활동 사진 2

function ClubR() {
  const navigate = useNavigate(); // 뒤로가기 기능
  const [reviews, setReviews] = useState([]); // 리뷰 목록 상태
  const [newReview, setNewReview] = useState(''); // 새로운 리뷰 입력 상태
  const randomAuthors = ['김민수', '박지훈', '이영희', '최은정', '정호석']; // 임의 작성자 목록

  // 리뷰 제출 핸들러
  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      const randomAuthor = randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
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

      <div className="club-images-section">
        <div className="image-with-caption">
          <img src={i1Image} alt="활동 사진 1" className="club-image" />
          <p className="image-caption">&lt;유니콘스 단체사진&gt;</p>
        </div>
        <div className="image-with-caption">
          <img src={i2Image} alt="활동 사진 2" className="club-image" />
          <p className="image-caption">&lt;타대학 친선전 교류&gt;</p>
        </div>
      </div>

      <div className="details-section">
        <p><strong>일시</strong></p>
        <p>화요일 - 20:30 ~ 22:00</p>
        <p>토요일 - 17:30 ~ 19:00</p>
        <p><strong>장소</strong> - 광운대 링크장</p>
        <p>"선수출신 감독님, 코치님과의 전문적인 운동!"</p>
      </div>

      <div className="review-section">
        <h2 className="section-title">리뷰</h2>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              {review.content} <em>- {review.author}</em>
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

      <div className="fixed-footer">
        <button className="support-button">동아리 지원하기</button>
      </div>
    </div>
  );
}

export default ClubR;
