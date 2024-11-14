import React from 'react';

function SignupForm() {
  return (
    <div style={{ width: '300px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#4a1533' }}>
      <h2 style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>회원가입</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          학번
          <input type="text" style={inputStyle} />
        </label>
        <label>
          이름
          <input type="text" style={inputStyle} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          전화번호
          <input type="text" style={{ ...inputStyle, flexGrow: 1 }} />
          <button type="button" style={buttonStyle}>인증</button>
        </label>
        <label>
          전화번호 인증 번호
          <input type="text" style={inputStyle} />
        </label>
        <label>
          학과
          <input type="text" style={inputStyle} />
        </label>
        <label>
          나이
          <input type="text" style={inputStyle} />
        </label>
        <label>
          이메일
          <input type="email" style={inputStyle} />
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

const buttonStyle = {
  padding: '8px 12px',
  backgroundColor: '#4a1533',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '8px',
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
