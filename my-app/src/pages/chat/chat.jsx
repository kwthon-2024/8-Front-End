import React, { useState, useEffect } from "react";
import "./chat.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8086/chat");

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      const newMessage = event.data;
      setChatLog((prevMessages) => [...prevMessages, newMessage]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };

    setSocket(ws);
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== "" && socket) {
      const messageObj = {
        sender: "김주현", // 수정 가능: 로그인된 사용자 이름으로 대체
        content: message,
      };
      socket.send(JSON.stringify(messageObj));
      setMessage("");
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
        <button onClick={handleSend} className="send-button">
          전송
        </button>
      </div>
    </div>
  );
}

export default Chat;
