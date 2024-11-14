import React from 'react';
import './MainPage.scss'; // 스타일 파일 import

function MainPage() {
  const clubCategories = ['스포츠 분야', '음악 분야', '취미 분야', '학회 분야', '봉사 분야'];

  return (
    <div className="main-container">
      <h2 className="section-title">동아리 목록</h2>
      <div className="club-list">
        {clubCategories.map((category, index) => (
          <div key={index} className="club-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;