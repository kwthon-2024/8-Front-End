import {
  faHouse,
  faUsers,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // 필요한 아이콘만 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  // Navbar를 표시할 경로 목록
  const allowedPaths = ["/", "/page2", "/page3", "/page4"];

  useEffect(() => {
    // 현재 위치가 allowedPaths에 포함되면 showNavbar를 true로 설정
    if (allowedPaths.includes(location.pathname)) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  if (!showNavbar) {
    return null; // 하단바를 숨김
  }

  return (
    <div className="nav_bar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <FontAwesomeIcon icon={faHouse} />
          {location.pathname === "/" && <div className="dot-indicator" />}
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page2"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <FontAwesomeIcon icon={faUsers} />
          {location.pathname === "/page2" && <div className="dot-indicator" />}
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page3"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <FontAwesomeIcon icon={faCircleUser} /> {/* 내정보 아이콘 */}
          {location.pathname === "/page3" && <div className="dot-indicator" />}
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page4"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          <FontAwesomeIcon icon={faBars} /> {/* 메뉴 아이콘 */}
          {location.pathname === "/page4" && <div className="dot-indicator" />}
        </NavLink>
      </div>
    </div>
  );
}