import React from 'react'
import "../common/Grid.css"
import styled from "styled-components";

const StyleDiv = styled.div`
  margin: 0;
  width: 100%;
  background-color: gray;
`

function Document() {
  return (
    <StyleDiv className="grid-col-12">
      {/* Document 영역 */}
      임시 화면입니다.

    </StyleDiv>
  )
}

export default Document;