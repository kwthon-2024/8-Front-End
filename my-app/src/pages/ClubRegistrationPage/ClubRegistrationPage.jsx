import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import './ClubRegistrationPage.scss';

function ClubRegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    affiliation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // JSON 객체 생성
    const payload = {
      name: formData.name,
      category: formData.category,
      affiliation: formData.affiliation,
    };

    console.log("Payload:", payload);

    try {
      const response = await axios.post('http://localhost:8086/api/club/', payload, {
        headers: {
          'Content-Type': 'application/json', // JSON 전송 시 필요
        },
      });
      alert('동아리가 성공적으로 등록되었습니다!');
      navigate(-1); // 이전 페이지로 이동
    } catch (error) {
      console.error('동아리 등록 오류:', error);
      alert('동아리 등록에 실패했습니다.');
    }
  };

  return (
    <div className="club-registration-container">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <h1>동아리 등록</h1>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          동아리 이름
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="동아리 이름을 입력하세요" />
        </label>
        <label>
          동아리 유형(ex 스포츠, 음악)
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="동아리 유형을 입력하세요" />
        </label>
        <label>
          동아리 소속 여부 (중앙동아리, oo학과 소모임)
          <input type="text" name="affiliation" value={formData.affiliation} onChange={handleChange} placeholder="소속 여부를 입력하세요" />
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