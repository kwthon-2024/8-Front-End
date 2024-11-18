import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io"; // 아이콘 import
import './signup.css'; // 스타일 파일 import

function SignupForm() {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    phoneNumber: '',
    verificationCode: '',
    department: '',
    age: '',
    email: '',
    password: '', // 비밀번호 필드 추가
    confirmPassword: '' // 비밀번호 확인 필드 추가
  });

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    axios.post('http://localhost:8086/api/users/signup', formData)
      .then(response => {
        alert("회원가입 성공!");
        setFormData({
          studentId: '',
          name: '',
          department: '',
          age: '',
          email: '',
          password: '', // 폼 초기화 시 비밀번호도 초기화
          confirmPassword: '' // 폼 초기화 시 비밀번호 확인도 초기화
        });
        // 회원가입 성공 후 로그인 페이지로 이동
        navigate('/login');
      })
      .catch(error => {
        console.error("회원가입 실패:", error);
        alert("회원가입 실패! 다시 시도하세요.");
      });
  };

  return (
    <div className="signup-container">
      {/* 뒤로 가기 버튼 */}
      <button onClick={() => navigate(-1)} className="back-button">
        <IoIosArrowBack size={24} /> {/* 아이콘 크기는 필요에 따라 조정 */}
      </button>
      <h2 className="signup-title">회원가입</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          <input
            type="text"
            name="studentId"
            placeholder="학번"
            value={formData.studentId}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="text"
            name="department"
            placeholder="학과"
            value={formData.department}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="number"
            name="age"
            placeholder="나이"
            value={formData.age}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">회원가입</button>
      </form>
    </div>
  );
}

export default SignupForm;