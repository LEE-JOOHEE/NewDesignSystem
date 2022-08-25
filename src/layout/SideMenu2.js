import React from 'react'
import "../common/Grid.css"
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleDiv = styled.div`
  margin: 0;

  .menu-title{font-size: 20px; margin: 20px 0;}
  .sub-title{padding-bottom: 20px;}
  ul{font-size: 20px; font-weight: 600; margin-bottom: 20px;}
  li{font-size: 16px; font-weight: 400; padding: 10px;}
  li > a{padding: 10px;}
`
const active = {
  backgroundColor : '#005EAE',
  color: '#fff',
  borderRadius: '6px',
  padding: '10px',
}

function SideMenu() {
  return (
    <StyleDiv className="col-span-2">

      <div className="side-menu">
        <div className="menu-title">Design System 0.0.1 Hierarchy</div>
        <ul>
          <div className="sub-title">Foundation</div>
          <li>
            <NavLink to="/document" style={({isActive}) => (isActive ? active : undefined)} end>
              Spacing Basics</NavLink>
          </li>
          <li>
            <NavLink to="/document/1" style={({isActive}) => (isActive ? active : undefined)}>
              Layout Grid</NavLink>
          </li>
          <li>
            <NavLink to="/document/2" style={({isActive}) => (isActive ? active : undefined)}>
              메뉴 2</NavLink>
          </li>
        </ul>

        <ul>
          <div className="sub-title">Version</div>
          <li>
            <NavLink to="/document/3" style={({isActive}) => (isActive ? active : undefined)}>
              메뉴 3</NavLink>
          </li>
          <li>
            <NavLink to="/document/4" style={({isActive}) => (isActive ? active : undefined)}>
              메뉴 4</NavLink>
          </li>
          <li>
            <NavLink to="/document/5" style={({isActive}) => (isActive ? active : undefined)}>
              메뉴 5</NavLink>
          </li>
        </ul>
      </div>

    </StyleDiv>




  )
}

export default SideMenu;