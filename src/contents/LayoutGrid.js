import React from 'react'
import "./LayoutGrid.css";
import { Link } from "react-router-dom";

function LayoutGrid() {

  return (
    <div className="layoutGrid col-span-10">
      <div className="title">LayoutGrid</div>
      <div className="descript">
        <p>
        레이아웃 그리드는 화면에서 일관되게 콘텐츠를<br/>
        배치, 정렬 및 간격을 두는 데 도움이 됩니다.<br/>
        가능한 동일한 콘텐츠를 표시하면서 컨텍스트 변경에 적절하게 반응하는<br/>
        일관된 레이아웃 디자인을 목표로 활용합니다.
        <br/><br/>
        우선 브레이크 포인트 별 대표 기기를 선정한 후<br/>
        화면당 대표가 되는 그리드 규칙을 만듭니다.
        <br/><br/>
        예시) <br/><br/>
        모바일 0~599px / 대표 기기 360px<br/>
        Small Tablet 600px~1023px / 대표 기기 768px<br/>
        Large Tablet 1024px~1439px / 대표 기기 1024px<br/>
        Desktop 1440px~1920px / 대표 기기 1440px<br/>
        </p>
      </div>
      <img src="https://www.thewordcracker.com/wp-content/uploads/2017/11/divi-fashion-layout-pack-featured-image-compressor.jpg" alt="" />
    
      <div className="sub-title">Breakpoint</div>
    
      <div className="sub-title">새창에서 링크열기</div>
      <Link to="/new" target="_blank" rel="noopener">반응형</Link>
      <br/><br/>
    
    </div>
  )
}

export default LayoutGrid;