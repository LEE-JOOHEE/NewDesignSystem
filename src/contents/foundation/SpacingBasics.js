import React from 'react'
import "./Foundation.css";
import spacingBaseUnit from "../../static/images/spacing-1-base.svg";
import spacingSizing1 from "../../static/images/spacing-2-sizing-1.svg";
import spacingSizing2 from "../../static/images/spacing-2-sizing-2.svg";
import spacingPadding from "../../static/images/spacing-3-padding.svg";

import TopButton from "../../layout/TopButton";

function SpacingBasics() {

  return (
    <div className="doc">

      <div className="doc-wrap">
        <div className="cont-header">
          <div className="title">Spacing Basics</div>
          <div className="descript">
            레이아웃 그리드 설정 전에 모든 크기 조정, 측정 및 간격 결정에 
            영향을 미치는 몇 가지 간격 기본 사항을 픽스합니다.
          </div>
        </div>

        <div className="contents">
          <div className="number-box">1</div>
          <div className="title">Base Unit</div>
          <div className="descript">
          기본 단위는 모든 측정값의 <b>배수</b>를 정의합니다. 
          다양한 장치를 쉽고 일관되게 확장할 수 있는 <b>8px</b>을 기본 단위 설정합니다. 
          이는 대부분의 화면 크기가 8로 나눌 수 있고 
          8자체가 쉽게 나눌 수 있는 숫자이기 때문입니다. 
          <b> 4px</b>격자를 추가하여 구성 요소 내의 아이콘, 텍스트 및 일부 요소 등과 같이 
          영역의 간격을 개선하고 구현을 더 쉽게 만들 수 있습니다.
          </div>
          <div className="img-area">
            <img src={spacingBaseUnit} alt="spacing-base-unit" />
          </div>
        </div>

        <div className="contents">
          <div className="number-box">2</div>
          <div className="title">Sizing</div>
          <div className="descript">
          UI 요소의 높이와 너비는 가능하면 <b>8px</b> 기본 단위 (예: 8, 16, 24)의 증분으로 
          측정하여 일관된 시각적 리듬을 제공합니다.<br/>
          단 세밀한 조정이 필요한 요소에는 <b>4px</b>을 사용하여 모든 디자인에 
          동일한 증분 높이값을 줍니다. 
          </div>
          <div className="img-area">
            <img src={spacingSizing1} className="img-ptb-0" alt="spacing-sizing-4px" />
            <img src={spacingSizing2} className="img-ptb-0" alt="spacing-sizing-8px" />
          </div>
        </div>

        <div className="contents">
          <div className="number-box">3</div>
          <div className="title">Padding</div>
          <div className="descript">
          패딩은 UI요소 사이의 공간을 의미하며 일관되고 
          예측 가능하도록 기본 단위의 증분으로 여백을 결정합니다. 
          </div>
          <div className="img-area-bottom">
            <img src={spacingPadding} alt="spacing-padding" />
          </div>
        </div>

        <TopButton />

      </div>
    </div>
  )
}

export default SpacingBasics