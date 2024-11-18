import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import './SportsPage.scss';
import clubImage from '../../assets/images/club.jpg';

function SportsPage() {
  const navigate = useNavigate();

  const clubList = [
    {
      id: 1,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      tagline: '"!?WHO IS NEXT!?"',
      image: clubImage,
      tags: ['모집중', '#중앙 동아리']
    },
    {
      id: 2,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      tagline: '"!?WHO IS NEXT!?"',
      image: clubImage,
      tags: ['#소모임']
    }
  ];

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
        {clubList.map((club) => (
          <div
            key={club.id}
            className="club-card"
            onClick={() => navigate(`/clubR/${club.id}`)}
          >
            <div className="tags">
              {club.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <img src={clubImage} alt={club.title} className="club-image" />
            <div className="club-details">
              <h3>{club.description}</h3>
              <p>{club.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsPage;