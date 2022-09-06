import React from 'react'
import { useState, useEffect } from 'react'
import "../../common/Grid.css";
import "../../contents/foundation/Foundation.css";
import TopButton from "../../layout/TopButton";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DemoLayoutGrid() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewSize, setViewSize] = useState("");
  useEffect(() => {
    if(window.innerWidth < 361){setViewSize("S")}
    else if(window.innerWidth < 769){setViewSize("M")}
    else if(window.innerWidth < 1025){setViewSize("L")}
    else if(window.innerWidth < 1441){setViewSize("XL")}
    else{setViewSize("Full")}
    window.addEventListener('resize', e => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  return (
    <>
    <div className="doc-wrap" style={{"minWidth" : "auto", "overflowX" : "auto"}}>
      <div className="cont-header">
        <div className="title">퍼블리싱 가이드</div>
        <div className="descript">
          화면의 크기와 방향에 맞게 조정되는 반응형 레이아웃 그리드로
          비교적 일관성있는 레이아웃 소스코드를 제공하며,<br/>
          기기별 화면사이즈에 맞는 브레이크포인트를 4가지로 설정하여 반응형 레이아웃 제공
        </div>
      </div>

      <div className="contents pb-0">
        <div className="title">1. 고정형 레이아웃 (fixed)</div>
        <div className="number-box">View</div>
        <div className="ex-caption">
          Max width 너비를 1366px 기준으로 그이상 더 넓은 화면에서는 양쪽 여백을 주어 가운데(center) 위치할수 있도록 합니다.
        </div>
      </div>
      
      <div className="comm-Header">Header</div>
      <div className="comm-Body layout-body-bg plr-40">
        <div className="fixed-body grid-col-2 gap-16 text-c">
          <div className="comm-Container layout-cont-bg">
            <p>container 1</p>
            <div className="comm-SectionWrap">
              <div className="comm-Section layout-section-bg">section</div>
            </div>
          </div>
          <div className="comm-Container layout-cont-bg">
            <p>container 2</p>
            <div className="comm-SectionWrap">
              <div className="comm-Section layout-section-bg">section</div>
              <div className="comm-Section layout-section-bg">section</div>
              <div className="comm-Section layout-section-bg">section</div>
            </div>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="number-box">Code</div>
        <div className="ex-code-area">
          <p>
            &lt;div className="<b>fixed-body</b>"&gt;<br/>
            &nbsp;&nbsp;
            &lt;div className="container grid-col-2 gap-16 spBg"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div className="item"&gt;1&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div className="item"&gt;2&lt;/div&gt;<br/>
            &nbsp;&nbsp;
            &lt;/div&gt;<br/>
            &lt;/div&gt;
          </p>
        </div>
      </div>

      <div className="contents pb-0">
        <div className="title">2. 가변성 레이아웃 (Fluid)</div>
        <div className="number-box">View</div>
        <div className="ex-caption">
          width 100% 비율(full)로 화면 또는 브라우저 뷰포트의 너비에 비례하여 확장 또는 축소되도록 설정합니다.
        </div>
      </div>

      <div className="comm-Header">Header</div>
      <div className="comm-Body layout-body-bg plr-40">
        <div className="fluid-body grid-col-2 gap-16 text-c">
          <div className="comm-Container layout-cont-bg">
            <p>container 1</p>
            <div className="comm-SectionWrap">
              <div className="comm-Section layout-section-bg">section</div>
            </div>
          </div>
          <div className="comm-Container layout-cont-bg">
            <p>container 2</p>
            <div className="comm-SectionWrap">
              <div className="comm-Section layout-section-bg">section</div>
              <div className="comm-Section layout-section-bg">section</div>
              <div className="comm-Section layout-section-bg">section</div>
            </div>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="number-box">Code</div>
        <div className="ex-code-area">
          <p>
            &lt;div className="<b>fluid-body</b>"&gt;<br/>
            &nbsp;&nbsp;
            &lt;div className="container grid-col-2 gap-16 spBg"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div className="item"&gt;1&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div className="item"&gt;2&lt;/div&gt;<br/>
            &nbsp;&nbsp;
            &lt;/div&gt;<br/>
            &lt;/div&gt;
          </p>
        </div>
      </div>

      <div className="contents pb-0">
        <div className="title">3. 반응형 레이아웃 (Responsive)</div>
        <div className="number-box">View</div>
        <div className="ex-caption">
          모바일(S : 360px), 테블릿(M : 768px , L : 1024px), 데스크탑(XL : 1440px)
          기준 사이즈를 고려하여 반응형 레이아웃을 제공합니다.
        </div>
      </div>

      <div className="comm-Header h-fit">
        <div className="ml-20">현재 화면의 너비는 
          <span style={{"color":"#FBBF24"}}> {windowWidth} px</span> 입니다.
          <span style={{"color":"#FBBF24"}} className="pl-8">{viewSize}</span> 사이즈 입니다.<br/>
          <p style={{"color":"#111"}}>화면을 확대/축소 하면서 브레이크 포인트를 확인 할 수 있습니다.</p>
        </div>
      </div>
      <div className="fluid-body">
        <div className="container-auto-bg pt-16">
          <div className="item col-span-12-auto layBg">col-span-12-auto</div>
        </div>
        <div className="container-auto-bg pt-24">
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
          <div className="item col-span-1-auto">col-span<br/>-1-auto</div>
        </div>
        <div className="container-auto-bg pt-24">
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span<br/>-2-auto</div>
        </div>
        <div className="container-auto-bg pt-24">
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
        </div>
        <div className="container-auto-bg pt-24">
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
        </div>
        <div className="container-auto-bg pt-24 pb-16">
          <div className="item col-span-6-auto">col-span-6-auto</div>
          <div className="item col-span-6-auto">col-span-6-auto</div>
        </div>
      </div>

      <div className="contents plr-16">
        <div className="container-auto p-0 gap-24">
          <div className="col-span-6-auto">
            <div className="number-box">Sample</div>
            <div className="ex-text-area">
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                반응형 레이아웃을 자동으로 적용시키기 위해서</p>
              <p className="ml-28">"container-auto" 라는 클래스를 사용합니다.</p>
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                12컬럼 기준으로, 가장 단순한 반응형 구현을 위한 제한적인 구성</p>
              <p className="ml-28">- 12컬럼을 모두 병합한 단일행 레이아웃 (col-span-12-auto)</p>
              <p className="ml-28">- 1컬럼씩 나누는 12분할 레이아웃 (col-span-1-auto)</p>
              <p className="ml-28">- [2-2-2-2-2-2] 6분할 레이아웃 (col-span-2-auto)</p>
              <p className="ml-28">- [3-3-3-3] 4분할 레이아웃 (col-span-3-auto)</p>
              <p className="ml-28">- [4-4-4] 3분할 레이아웃 (col-span-4-auto) <sub>(코드예시 참고)</sub></p>
              <p className="ml-28">- [6-6] 2분할 레이아웃 (col-span-6-auto)</p>
            </div>
          </div>
          <div className="col-span-6-auto">
            <div className="number-box">Code</div>
            <div className="ex-code-area">
              <p>
                &lt;div className="fluid-body"&gt;<br/>
                &nbsp;&nbsp;
                &lt;div className="<b>container-auto</b> ptb-16 spBg"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &lt;div className="item <b>col-span-4-auto</b>"&gt;1&lt;/div&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &lt;div className="item <b>col-span-4-auto</b>"&gt;2&lt;/div&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &lt;div className="item <b>col-span-4-auto</b>"&gt;3&lt;/div&gt;<br/>
                &nbsp;&nbsp;
                &lt;/div&gt;<br/>
                &lt;/div&gt;
              </p>
            </div>
          </div>
        </div>

      </div>


      <TopButton />
    </div>

    </>
  )
}

export default DemoLayoutGrid;