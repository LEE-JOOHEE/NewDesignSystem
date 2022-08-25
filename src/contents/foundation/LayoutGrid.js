import React from 'react'
import "./Foundation.css";
import gridAnatomy from "../../static/images/grid-1-anatomy.svg";
import gridManuscript from "../../static/images/grid-2-manuscript.svg";
import gridColumn from "../../static/images/grid-3-column.svg";
import gridColumnComp from "../../static/images/grid-4-columnComp.svg";
import gridBaseline from "../../static/images/grid-5-baseline.svg";
import gridLineComp from "../../static/images/grid-6-lineComp.svg";
import { Link } from "react-router-dom";
import TopButton from "../../layout/TopButton";

function LayoutGrid() {
  return (
    <div className="doc">

      <div className="doc-wrap">
        <div className="cont-header">
          <div className="title">Layout Grid</div>
          <div className="descript">
          장치와 화면 크기가 증가함에 따라 그리드는 일관성을 
          유지하고 응집력 있는 디자인 경험을 만들 수 있게 합니다.
          </div>
        </div>

        <div className="contents">
          <div className="title">Grid Anatomy</div>
          <div className="descript">
          모든 그리드는 Column, Gutter, Margin 세 가지 요소로 구성됩니다.<br/>
          Column사이의 Gutter은 기본 단위의 <b>8px</b>의 배수여야 합니다.
          </div>
          <div className="img-area-bottom">
            <img src={gridAnatomy} alt="grid-anatomy" />
          </div>
        </div>

        <div className="contents">
          <div className="number-box">Grid Type 1</div>
          <div className="title">Manuscript Grid</div>
          <div className="descript">
          전체 콘텐츠 영역의 너비에 걸쳐 있는 단 하나의 열이 있는
          가장 단순한 레이아웃입니다.
          </div>
          <div className="img-area-bottom">
            <img src={gridManuscript} alt="grid-anatomy" />
          </div>
        </div>

        <div className="contents">
          <div className="number-box">Grid Type 2</div>
          <div className="title">Column Grid</div>
          <div className="descript">
          컬럼 그리드는 프레임을 개체가 정렬되는 균일한 간격의 
          수직 필드로 분할합니다.<br/>
          일반적으로 반응형 화면 크기를 디자인할 때 2분의 1, 3분의 1, 
          6분의 1 로 나눌 수 있는 <b>12개의 열</b>로 구성합니다.
          </div>
          <div className="img-area-bottom">
            <img src={gridColumn} alt="grid-anatomy" />
          </div>
          <div className="img-sub-area">
            <div className="title">Components
              <div className="sub-title">
                콘텐츠 화면 구성 시 시각적으로 확인 가능한<br/>
                컬럼 그리드 컴포넌트입니다.
              </div>
              <Link to="/new/gridGap" target="_blank" className="go-demo" rel="noopener noreferrer">Demo</Link>
            </div>
            <div className="sub-img">
              <img src={gridColumnComp} alt="grid-components" />
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="number-box">Grid Type 3</div>
          <div className="title">Baseline Grid</div>
          <div className="descript">
          베이스라인 격자는 텍스트에 대한 정렬 및 조밀한 수평 간격의 지침서 입니다.
          </div>
          <div className="img-area-bottom">
            <img src={gridBaseline} alt="grid-anatomy" />
          </div>
          <div className="img-sub-area-vertical">
            <div className="title">Components
              <div className="sub-title">
                화면 구성 시 시각적으로 확인 가능한<br/>
                베이스라인 그리드 컴포넌트입니다.
              </div>
              <Link to="/new" target="_blank" className="go-demo" rel="noopener noreferrer">Demo</Link>
            </div>
            <div className="sub-img">
              <img src={gridLineComp} alt="grid-components" />
            </div>
          </div>
        </div>

        <TopButton />

      </div>
    </div>
  )
}

export default LayoutGrid