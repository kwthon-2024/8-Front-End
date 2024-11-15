import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import './MyPage.scss'; // 스타일 파일 import

function MyPage() {
    const myClubs = [
        { name: '아이스 하키부', path: '/ice-hockey', logo: '/assets/iceunicorns.png' },
        { name: '농구 동아리', path: '/basketball', logo: '/assets/basketball.png' },
        { name: '축구 동아리', path: '/football', logo: '/assets/football.png' },
    ];

    return (
        <div className="my-page-container">
        <h2 className="section-title">내가 소속된 동아리</h2>
            <div className="club-list">
        {myClubs.map((club, index) => (
            <Link to={club.path} key={index} className="club-item-link">
            <div className="club-item">
                <img src={club.logo} alt={club.name} className="club-logo" />
                <p className="club-name">{club.name}</p>
            </div>
    </Link>
        ))}
        </div>
    </div>
    );
}

export default MyPage;
