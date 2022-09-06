import React from 'react'
import "./Foundation.css";
import TopButton from "../../layout/TopButton";

import mainColor from "../../static/images/color-1-mainColor-1.svg";
import mainColorRatio from "../../static/images/color-1-mainColor-2.svg";
import mainColorVariation from "../../static/images/color-1-mainColor-3.svg";

function Color() {
  return(
    <div className="doc">

      <div className="doc-wrap">
        <div className="cont-header">
          <div className="title">Color</div>
          <div className="descript">
            컬러시스템
          </div>
        </div>

        <div className="contents">
          <div className="number-box">1</div>
          <div className="title">Main Color</div>
          <div className="descript">
          서비스의 브랜드를 대표하는 컬러로 포인트 및 액션 컴포넌트의 색상으로 사용합니다. 주요 컬러는 500입니다.<br/>
          컬러 네이밍은 밝기의 차이에 따른 스펙트럼에 따라 정의합니다. (ex. gray-100)
          </div>
          <div className="img-area-responsive mb-40">
            <img src={mainColor} alt="main-color" />
          </div>
          <div className="img-sub-area mb-40">
            <div className="title">Contrast Ratio
              <div className="sub-title">
                선정된 메인 컬러의 접근성을 체크합니다.<br/>
                최소 AA 단계에 적합하도록 명도대비 4.5:1을 준수합니다.
              </div>
            </div>
            <div className="sub-img">
              <img src={mainColorRatio} alt="main-color-contrast-ratio" />
            </div>
          </div>
          <div className="img-sub-area ">
            <div className="title">Primary Variation
              <div className="sub-title">
              WCAG 2.0 기반으로 컬러별 9단계를 지원합니다.<br/>
              Shade 와 Tint 로 베리에이션
              </div>
            </div>
            <div className="sub-img">
              <img src={mainColorVariation} alt="main-color-primary-variation" />
            </div>
          </div>
        </div>




        <TopButton />
      </div>
    </div>
  )
}

export default Color