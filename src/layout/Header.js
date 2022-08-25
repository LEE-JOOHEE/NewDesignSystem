import React from 'react'
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  

  console.log(window.location.pathname);
  //특정화면에서 pathname '/new'로 시작하는 새창은 Header숨기기
  if(window.location.pathname.indexOf("/new") === 0 ) return null;

  return (
    <div className="header">
      <FontAwesomeIcon icon={faBrush} size="2x" className="faBrush" spin />
      <div className="title">
        <Link to="/document/0" className="text-link">디자인 시스템</Link>
      </div>
    </div>
  )
}

export default Header;