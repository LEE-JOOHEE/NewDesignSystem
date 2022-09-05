import React,{ useState, useEffect} from "react";
import "./Grid.css";

function Grid() {

  function gridColNum(){
    const items = [];
    for(let i = 1; i < 13; i++){
      items.push(<div className="item">{[i]}</div>)
    }
    return items;
  }

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
        <div class="number-box">Code</div>
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
        <div class="number-box">Code</div>
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
          <p style={{"color":"#111"}}>화면을 확대/축소 하면서 브레이크 포인트를 확인하세요.</p>
        </div>
      </div>
      <div className="fluid-body">
        <div className="comm-Container-auto pt-16">
          <div className="item col-span-12-auto layBg">col-span-12-auto</div>
        </div>
        <div className="comm-Container-auto pt-24">
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
        <div className="comm-Container-auto pt-24">
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
          <div className="item col-span-2-auto layBg">col-span-2-auto</div>
        </div>
        <div className="comm-Container-auto pt-24">
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
          <div className="item col-span-3-auto">col-span-3-auto</div>
        </div>
        <div className="comm-Container-auto pt-24">
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
          <div className="item col-span-4-auto layBg">col-span-4-auto</div>
        </div>
        <div className="comm-Container-auto pt-24 pb-16">
          <div className="item col-span-6-auto">col-span-6-auto</div>
          <div className="item col-span-6-auto">col-span-6-auto</div>
        </div>
      </div>

      <div className="contents">
        <div class="number-box">Code</div>
        <div className="ex-code-area">
          <p>
            &lt;div className="fluid-body"&gt;<br/>
            &nbsp;&nbsp;
            &lt;div className="<b>comm-Container-auto</b> ptb-16 spBg"&gt;<br/>
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



    <div className="Grid">

      {/* <div className="container grid-col-12">
        { gridColNum() }
      </div> */}

      <div className="contents">
        <div className="comm-Header">Header</div>
        <div className="comm-Body">
          <div className="fluid-body">
            

            <div className="mtb-16" style={{"fontSize":"2rem"}}>예외검토</div>
            <div className="comm-Container-auto pt-16">
              <div className="item col-span-5" style={{"height":"auto","background":"#aaa"}}>5</div>
              <div className="item col-span-5" style={{"height":"auto","background":"#aaa"}}>5</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#aaa"}}>2</div>
            </div>

            <div className="comm-Container-auto pt-16">
              <div className="item col-span-7" style={{"height":"auto","background":"#fff"}}>7</div>
              <div className="item col-span-5" style={{"height":"auto","background":"#fff"}}>5</div>
            </div>

            <div className="comm-Container-auto pt-16">
              <div className="item col-span-3" style={{"height":"auto","background":"#bbb"}}>3</div>
              <div className="item col-span-4" style={{"height":"auto","background":"#bbb"}}>4</div>
              <div className="item col-span-5" style={{"height":"auto","background":"#bbb"}}>5</div>
            </div>

            <div className="comm-Container-auto pt-16">
              <div className="item col-span-2" style={{"height":"auto","background":"#eee"}}>2</div>
              <div className="item col-span-10" style={{"height":"auto","background":"#eee"}}>10</div>
            </div>

            <div className="comm-Container-auto pt-16">
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>2</div>
              <div className="item col-span-6" style={{"height":"auto","background":"#ccc"}}>6</div>
              <div className="item col-span-4" style={{"height":"auto","background":"#ccc"}}>4</div>
            </div>

            <div className="mtb-16" style={{"fontSize":"2rem"}}>예제) 샘플화면</div>
            <div className="comm-Container-auto pb-24">
              <div className="item col-span-4-auto" style={{"height":"auto","background":"#3CC13B"}}>
                <div className="container grid-col-3 gap-16">
                  <div className="item">모바일 0~599px</div>
                  <div className="item">Small Tablet 600px ~ 1023px</div>
                  <div className="item">Large Tablet 1024px ~ 1439px</div>
                </div>
              </div>
              <div className="item col-span-4-auto" style={{"height":"auto","background":"#3CC13B"}}>
                <div className="comm-Container-auto">
                  <div className="item col-span-4-auto">모바일 0~599px</div>
                  <div className="item col-span-4-auto">Small Tablet 600px ~ 1023px</div>
                  <div className="item col-span-4-auto">Large Tablet 1024px ~ 1439px</div>
                </div>
              </div>
              {/* <div className="item col-span-4-auto" style={{"height":"auto","background":"#3CC13B"}}>
                <div className="container grid-col-5 gap-16">
                  <div className="item">모바일 0~599px</div>
                  <div className="item">Small Tablet 600px ~ 1023px</div>
                  <div className="item">Large Tablet 1024px ~ 1439px</div>
                  <div className="item">Desktop 1440px ~ 1920px</div>
                  <div className="item">대표 기기 1440px</div>
                </div>
              </div> */}
              <div className="item col-span-4-auto" style={{"height":"auto","background":"#3CC13B"}}>
                <div className="comm-Container-auto">
                  <div className="item col-span-6-auto">Small Tablet 600px ~ 1023px</div>
                  <div className="item col-span-6-auto">Large Tablet 1024px ~ 1439px</div>
                </div>
              </div>
            </div>
            
          </div>

        </div>

      </div>

      

    </div>
    </>
  )
}

export default Grid;