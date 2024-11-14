import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    phoneNumber: '',
    department: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/signup', formData)
      .then(response => {
        alert("회원가입 성공!");
        setFormData({
          studentId: '',
          name: '',
          phoneNumber: '',
          department: '',
          age: '',
          email: ''
        });
      })
      .catch(error => {
        console.error("회원가입 실패:", error);
        alert("회원가입 실패! 다시 시도하세요.");
      });
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#4a1533' }}>
      <h2 style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>회원가입</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          학번
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} style={inputStyle} />
        </label>
        <label>
          이름
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
        </label>
        <label>
          전화번호
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={inputStyle} />
        </label>
        <label>
          학과
          <input type="text" name="department" value={formData.department} onChange={handleChange} style={inputStyle} />
        </label>
        <label>
          나이
          <input type="number" name="age" value={formData.age} onChange={handleChange} style={inputStyle} />
        </label>
        <label>
          이메일
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
        </label>
        <button type="submit" style={submitButtonStyle}>회원가입</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const submitButtonStyle = {
  padding: '10px',
  backgroundColor: '#4a1533',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginTop: '16px',
};

export default SignupForm;
