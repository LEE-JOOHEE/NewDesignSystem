import React from 'react'
import "../common/Grid.css"
import styled from "styled-components";
import SideMenu from "./SideMenu";
import Document from "./Document";
import { Routes, Route } from "react-router-dom";

import DocHeader from "../contents/foundation/DocHeader";
import SpacingBasics from "../contents/foundation/SpacingBasics";
import LayoutGrid from "../contents/foundation/LayoutGrid";
import ResponsiveLayout from "../contents/foundation/ResponsiveLayout";
import Color from "../contents/foundation/Color";

const StyleDiv = styled.div`
  height: calc(100vh - 97px);
  margin: 0;
  display: flex;
`

function Body() {

  const pathname = window.location.pathname;

  return (
    <StyleDiv className="body">
      
      {/* 사이드 메뉴 */}
      <SideMenu />
      {pathname === "/" ? <DocHeader path={"0"} /> : null}
      
      {/* Document 영역은 가만히 있고, 컨텐츠만 계속 바뀌도록 구현예정 */}
      <Routes>
        <Route path="0" element={<DocHeader />} />
        <Route path="0/spacing" element={<SpacingBasics />} />
        <Route path="0/layout" element={<LayoutGrid />} />
        <Route path="0/grid" element={<ResponsiveLayout />} />

        <Route path="1/color" element={<Color />} />

        <Route path="2" element={<DocHeader />} />
        <Route path="3" element={<DocHeader />} />
        <Route path="4" element={<Document />} />
        <Route path="5" element={<Document />} />
        <Route path="6" element={<Document />} />
      </Routes>

    </StyleDiv>
  )
}

export default Body;