import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import './ClubRegistrationPage.scss'; // 스타일 파일 import

function ClubRegistrationPage() {
  const navigate = useNavigate();

  return (
    <div className="club-registration-container">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <h1>동아리 등록</h1>
      </div>
      <form className="registration-form">
        <label>
          동아리 이름
          <input type="text" placeholder="동아리 이름을 입력하세요" />
        </label>
        <label>
          동아리 유형(ex 스포츠, 음악)
          <input type="text" placeholder="동아리 유형을 입력하세요" />
        </label>
        <label>
          동아리 소속 여부 (중앙동아리, oo학과 소모임)
          <input type="text" placeholder="소속 여부를 입력하세요" />
        </label>
        <label>
          이미지 등록
          <input type="file" />
        </label>
        <button type="submit" className="submit-button">등록 신청</button>
      </form>
    </div>
  );
}

export default ClubRegistrationPage;