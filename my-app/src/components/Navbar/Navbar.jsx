import {
  faCamera,
  faCircleUser,
  faFaceGrinHearts,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  // Navbar를 표시할 경로 목록
  const allowedPaths = ["/", "/page1", "/page2", "/page3", "/page4", "/search"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // 아래로 스크롤하고 특정 위치 이상일 때 Navbar 숨김
        setShowNavbar(false);
      } else if (window.scrollY <= 100) {
        // 페이지가 위로 스크롤되거나 특정 위치 이하일 때 Navbar 보임
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 현재 경로가 allowedPaths에 포함되지 않으면 null 반환
  if (!allowedPaths.includes(location.pathname) || !showNavbar) {
    return null;
  }

  return (
    <div className="nav_bar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page1"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FontAwesomeIcon icon={faCamera} />
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page2"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page3"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FontAwesomeIcon icon={faFaceGrinHearts} />
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page4"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FontAwesomeIcon icon={faCircleUser} />
        </NavLink>
      </div>
    </div>
  );
}