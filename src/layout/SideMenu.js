import React from 'react'
import "../common/Grid.css"
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const active = {
  backgroundColor : '#E8E9FF',
  color: '#111827',
  borderRadius: '8px',
}
const activeSub = {
  color: '#818CF8',
  background: 'transparent',
}

function SideMenu() {

  return (

      <div className="side-menu">
        {/* <div className="menu-title">Design System v0.2.0</div> */}
        <ul>
          <div className="menu-title">Foundation</div>
          <li className="sub-title">
            <NavLink to="/document/0" style={({isActive}) => (isActive ? active : undefined)} end>
              Grid</NavLink>
          </li>
          <li>
            <NavLink to="/document/0/spacing" style={({isActive}) => (isActive ? activeSub : undefined)}>
              Spacing Basics</NavLink>
          </li>
          <li>
            <NavLink to="/document/0/layout" style={({isActive}) => (isActive ? activeSub : undefined)}>
              Layout Grid Basics</NavLink>
          </li>
          <li>
            <NavLink to="/document/0/grid" style={({isActive}) => (isActive ? activeSub : undefined)}>
              Resposive Layout Grids</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/1/color" style={({isActive}) => (isActive ? active : undefined)} end>
              Color</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/2" style={({isActive}) => (isActive ? active : undefined)} end>
              Typo</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/3" style={({isActive}) => (isActive ? active : undefined)} end>
              Icon</NavLink>
          </li>
        </ul>

        <ul>
          <div className="menu-title">Component</div>
          <li className="sub-title">
            <NavLink to="/document/9" style={({isActive}) => (isActive ? active : undefined)} end>
              Navigation</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/10" style={({isActive}) => (isActive ? active : undefined)} end>
              Button</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/11" style={({isActive}) => (isActive ? active : undefined)} end>
              Text Field</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/12" style={({isActive}) => (isActive ? active : undefined)} end>
              Select Control</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/13" style={({isActive}) => (isActive ? active : undefined)} end>
              Table</NavLink>
          </li>
        </ul>
        
        <ul>
          <li className="sub-title">
            <NavLink to="/document/14" style={({isActive}) => (isActive ? active : undefined)} end>
              List</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/15" style={({isActive}) => (isActive ? active : undefined)} end>
              Dropdown</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/16" style={({isActive}) => (isActive ? active : undefined)} end>
              Badge</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/17" style={({isActive}) => (isActive ? active : undefined)} end>
              Modal</NavLink>
          </li>
        </ul>

        <ul>
          <li className="sub-title">
            <NavLink to="/document/18" style={({isActive}) => (isActive ? active : undefined)} end>
              Dialog</NavLink>
          </li>
        </ul>

      </div>

  )
}

export default SideMenu;