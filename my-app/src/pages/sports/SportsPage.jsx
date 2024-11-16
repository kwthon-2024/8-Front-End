import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import './SportsPage.scss';

function SportsPage() {
  const navigate = useNavigate();
  const [clubList, setClubList] = useState([]); // 빈 배열로 초기화
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/club?category=sports');
        console.log(response.data);
        setClubList(response.data || []); // 데이터가 없으면 빈 배열 설정
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        console.error('클럽 정보를 가져오는 중 오류 발생:', err);
        setError('클럽 정보를 불러올 수 없습니다. 다시 시도하세요.');
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) {
    return <div className="sports-page-container">로딩 중...</div>;
  }

  if (error) {
    return <div className="sports-page-container">{error}</div>;
  }

  return (
    <div className="sports-page-container">
      <div className="sports-header">
        <h2 className="page-title">
          <button onClick={() => navigate(-1)} className="back-button">
            <IoIosArrowBack size={24} />
          </button>
          스포츠 분야
        </h2>
      </div>
      <div className="line"></div>
      <div className="club-list">
        {clubList.length > 0 ? (
          clubList.map((club) => (
            <div
              key={club.id}
              className="club-card"
              onClick={() => navigate(`/clubR/${club.id}`)}
            >
              <div className="tags">
                <span className="tag">{club.isRecruiting}</span>
                <span className="tag">{club.category}</span>
              </div>
              <img src={club.imagePath || 'default-image-path.jpg'} alt={club.name} className="club-image" />
              <div className="club-details">
                <h3>{club.name}</h3>
                <p>""</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-clubs">등록된 클럽이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default SportsPage;
