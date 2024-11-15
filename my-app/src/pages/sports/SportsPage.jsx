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
    },
    {
      id: 2,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      tagline: '"!?WHO IS NEXT!?"',
      image: clubImage,
    }
  ];

  return (
    <div className="sports-page-container">
      <div className="sports-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <h2 className="page-title">스포츠 분야</h2>
      </div>
      <div className="club-list">
        {clubList.map((club) => (
          <div key={club.id} className="club-card">
            <img src={club.image} alt={club.title} className="club-image" />
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