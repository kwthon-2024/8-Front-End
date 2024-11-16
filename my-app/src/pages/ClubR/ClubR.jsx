import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import './ClubR.scss';

function ClubR() {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const [clubDetails, setClubDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubResponse = await axios.get(`http://localhost:8086/api/club/${clubId}/details`);
        setClubDetails(clubResponse.data);

        const reviewsResponse = await axios.get(`http://localhost:8086/api/club/${clubId}/reviews`);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [clubId]);

  const handleReviewSubmit = async () => {
    if (!newReview.trim()) {
      alert('리뷰 내용을 작성해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8086/api/club/${clubId}/reviews`,
        { content: newReview },
      );
      if (response.status === 201) {
        setReviews([...reviews, { content: newReview, author: '사용자 이름' }]);
        setNewReview('');
      }
    } catch (error) {
      console.error('리뷰 작성 중 오류 발생:', error);
    }
  };

  if (!clubDetails) {
    return <div className="club-detail-container">로딩 중...</div>;
  }

  return (
    <div className="club-detail-container">
      <div className="custom-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <div className="header-content">
          <h1>{clubDetails.name}</h1>
        </div>
      </div>

      <h2 className="section-title">{clubDetails.affiliation}</h2>

      {/* 리뷰 섹션 */}
      <div className="review-section">
        <h2 className="section-title">리뷰</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.content} - {review.author}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>리뷰 등록</button>
      </div>
    </div>
  );
}

export default ClubR;
