import React, { useState } from 'react';
import './chat.scss';
import { IoIosArrowBack } from "react-icons/io"; // Import for back button
import { useNavigate } from 'react-router-dom';

function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setChatLog([...chatLog, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <IoIosArrowBack size={24} />
        </button>
        <h1>유니콘스 채팅방</h1>
      </div>
      <div className="chat-content">
        {chatLog.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">전송</button>
      </div>
    </div>
  );
}

export default Chat;