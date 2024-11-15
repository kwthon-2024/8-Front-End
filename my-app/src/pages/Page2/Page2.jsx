import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // Import Navbar
import './Page2.scss';
import clubImage from '../../assets/images/club.jpg'; // Import image

function Page2() {
  const myClubs = [
    {
      id: 1,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      image: clubImage,
    },
    {
      id: 2,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      image: clubImage,
    },
    {
      id: 3,
      title: 'ICEUNICORNS',
      description: '아이스 하키부',
      image: clubImage,
    }
  ];

  return (
    <div className="page2-container">
      <div className="custom-header">
        <h1>내가 소속된 동아리</h1>
      </div>
      <div className="club-list">
        {myClubs.map((club) => (
          <Link to={`/club/${club.id}`} key={club.id} className="club-card-link">
            <div className="club-card">
              <img src={club.image} alt={club.title} className="club-image" />
              <div className="club-details">
                <h3>{club.description}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Navbar /> {/* Include Navbar at the bottom */}
    </div>
  );
}

export default Page2;