import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const TopButtonStyle = styled.div `
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  .top{
    font-family:"MinSans-400";
    font-size: 0.875rem;
    padding: 12px 10px;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    
    &:hover{
      border: 1px solid #000;
      outline: none;
      background: transparent;
      color: #000;
      font-family:"MinSans-500";
    }
  }
`

function TopButton() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    // console.log(window.scrollY)
    window.addEventListener("scroll", handleShowButton)
    return () => {
      window.removeEventListener("scroll", handleShowButton)
    }
  }, [])

  return showButton && (
    <TopButtonStyle>
      <button type="button" className="top" onClick={scrollToTop}>Top</button>
    </TopButtonStyle>
  )
}

export default TopButton;