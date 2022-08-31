import React from "react";
import "../foundation/Foundation.css";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopButton from "../../layout/TopButton";

function GridGap(){



  return(
    <div className="doc-wrap" style={{"minWidth" : "1440px", "overflowX" : "auto"}}>
      
      <div className="cont-header">
        <div className="title">퍼블리싱 가이드</div>
        <div className="descript">
          그리드 시스템 퍼블리싱 적용방법과 샘플 소스코드 제공
        </div>
      </div>

      <div className="contents">
        <div className="title">1. 그리드 레이아웃 생성</div>
        <div className="number-box">View</div>
        <div className="ex-caption">
          Browser 화면에서 그리드 12분할 기준으로 여러가지 방식으로 나눌수 있다
        </div>
        <div className="ex-area">
          <div className="container grid-col-12 gap-20">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
            <div className="item">10</div>
            <div className="item">11</div>
            <div className="item">12</div>
          </div>
        </div>
        
        <div className="number-box">Sample</div>
        <div className="ex-area mb-24">
          <div className="container grid-col-1 pb-0">
            <div className="item">grid-col-1</div>
          </div>
          <div className="container grid-col-2 gap-20 pb-0">
            <div className="item">grid-col-2 <sub>&nbsp;/ 1</sub></div>
            <div className="item">grid-col-2 <sub>&nbsp;/ 2</sub></div>
          </div>
          <div className="container grid-col-12 gap-20 pb-0">
            <div className="item col-span-6">col-span-6<sub>&nbsp;/ grid-col-12</sub></div>
            <div className="item col-span-6">col-span-6<sub>&nbsp;/ grid-col-12</sub></div>
          </div>
          <div className="container grid-col-12 gap-20 pb-0">
            <div className="item col-span-8">col-span-8<sub>&nbsp;/ grid-col-12</sub></div>
            <div className="item col-span-4">col-span-4<sub>&nbsp;/ grid-col-12</sub></div>
          </div>
          <div className="container grid-col-12 gap-20 pb-0">
            <div className="item col-span-4">col-span-4<sub>&nbsp;/ grid-col-12</sub></div>
            <div className="item col-span-4">col-span-4<sub>&nbsp;/ grid-col-12</sub></div>
            <div className="item col-span-4">col-span-4<sub>&nbsp;/ grid-col-12</sub></div>
          </div>
          <div className="container grid-col-5 gap-20">
            <div className="item col-span-2">col-span-2<sub>&nbsp;/ grid-col-5</sub></div>
            <div className="item col-span-2">col-span-2<sub>&nbsp;/ grid-col-5</sub></div>
            <div className="item col-span-1">col-span-1<sub>&nbsp;/ grid-col-5</sub></div>
          </div>
        </div>

        <div className="grid-col-2 gap-20">
          <div>
            <div className="ex-text-area h-full">
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드를 감싸는 컨테이너 영역의 기본 여백값
              </p>
              <p className="ml-28">
                container - 24px(위아래), 16px(좌우)로 지정</p>

              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드 기본 여백값
              </p>
              <p className="ml-28">그리드 양끝 Margin값 - 16px</p>
              <p className="ml-28">
                그리드 간격 Gutter값 - 20px (.gap-20)로 구현</p>
            </div>
          </div>
          <div>
            <div className="ex-text-area">
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드 컬럼 허용범위 (Col)
              </p>
              <p className="ml-28">
                "grid-col-1" 부터 "grid-col-12" 까지 사용가능
              </p>
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드 병합 허용범위 (Span)
              </p>
              <p className="ml-28">
                "col-span-2" 부터 "col-span-12" 까지 사용가능
              </p>
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드 간격 허용범위 (Gap)
              </p>
              <p className="ml-28">
                "gap-0" 부터 4px단위 증가 "gap-64" 까지 사용가능 <br/>
                ex) "gap-8", "gap-12", "gap-16", "gap-20" ... 
              </p>
            </div>
          </div>
        </div>

        <div className="number-box mt-40">Code</div>
        <div className="grid-col-2 gap-20">
          <div>
            <div className="ex-caption">
              가장 많이 사용하는 그리드 2분할 레이아웃</div>
            <div className="ex-code-area pb-48">
              <p>
              &lt;div className=<b>"container grid-col-2 gap-20"</b>&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item"&gt;1&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item"&gt;2&lt;/div&gt;<br/>
              &lt;/div&gt;
              </p>
            </div>
          </div>
          <div>
            <div className="ex-caption">그리드 병합</div>
            <div className="ex-code-area">
              <p>
              &lt;div className="container <b>grid-col-5</b> gap-20"&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>col-span-2</b>"&gt;1&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>col-span-2</b>"&gt;2&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>col-span-1</b>"&gt;3&lt;/div&gt;<br/>
              &lt;/div&gt;
              </p>
            </div>
          </div>
        </div>  
      </div>


      <div className="contents">
        <div className="title">2. 그리드 컴포넌트 Spacing</div>
        <div className="number-box">View</div>
        <div className="ex-caption">
          그리드 컴포넌트 간의 간격을 조절할 수 있는 방법은 
          gap, padding, margin 값을 사용하여 
          다양하고 가변적으로 여백값을 제어할수있도록 구현하였다.
        </div>
        <div className="ex-area">
          <div className="space-line-wrap-w">
            <div className="space-line-w" style={{"width":"4px"}}>4px</div>
            <div className="space-line-w" style={{"width":"8px"}}>8px</div>
            <div className="space-line-w" style={{"width":"12px"}}>12px</div>
            <div className="space-line-w" style={{"width":"16px"}}>16px</div>
            <div className="space-line-w" style={{"width":"20px"}}>20px</div>
            <div className="space-line-w" style={{"width":"24px"}}>24px</div>
            <div className="space-line-w" style={{"width":"28px"}}>28px</div>
            <div className="space-line-w" style={{"width":"32px"}}>32px</div>
            <div className="space-line-w" style={{"width":"36px"}}>36px</div>
            <div className="space-line-w" style={{"width":"40px"}}>40px</div>
            <div className="space-line-w" style={{"width":"44px"}}>44px</div>
            <div className="space-line-w" style={{"width":"48px"}}>48px</div>
            <div className="space-line-w" style={{"width":"52px"}}>52px</div>
            <div className="space-line-w" style={{"width":"56px"}}>56px</div>
            <div className="space-line-w" style={{"width":"60px"}}>60px</div>
            <div className="space-line-w mr-0" style={{"width":"64px"}}>64px</div>
          </div>
        </div>
        <div className="grid-col-3 gap-20">
          <div className="ex-area col-span-1 mb-0">
            <div className="space-line-wrap-h">
              <div className="text pl-12">4px<div className="space-line-h" style={{"height":"4px"}}></div></div>
              <div className="text pl-12">8px<div className="space-line-h" style={{"height":"8px"}}></div></div>
              <div className="text">12px<div className="space-line-h" style={{"height":"12px"}}></div></div>
              <div className="text">16px<div className="space-line-h" style={{"height":"16px"}}></div></div>
              <div className="text">20px<div className="space-line-h" style={{"height":"20px"}}></div></div>
              <div className="text">24px<div className="space-line-h" style={{"height":"24px"}}></div></div>
              <div className="text">28px<div className="space-line-h" style={{"height":"28px"}}></div></div>
              <div className="text">32px<div className="space-line-h" style={{"height":"32px"}}></div></div>
              <div className="text">36px<div className="space-line-h" style={{"height":"36px"}}></div></div>
              <div className="text">40px<div className="space-line-h" style={{"height":"40px"}}></div></div>
              <div className="text">44px<div className="space-line-h" style={{"height":"44px"}}></div></div>
              <div className="text">48px<div className="space-line-h" style={{"height":"48px"}}></div></div>
              <div className="text">52px<div className="space-line-h" style={{"height":"52px"}}></div></div>
              <div className="text">56px<div className="space-line-h" style={{"height":"56px"}}></div></div>
              <div className="text">60px<div className="space-line-h" style={{"height":"60px"}}></div></div>
              <div className="text">64px<div className="space-line-h mb-0" style={{"height":"64px"}}></div></div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="number-box">Sample</div>
            <div className="ex-text-area">
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                모든 컨텐츠와 컴포넌트는 여백(spacing)을 class로 자유롭게 
                제어할 수 있도록 구성되어있습니다.
              </p>
              <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
                그리드와 플렉스 갭(Gap) 허용범위
              </p>
              <p className="ml-28">
                gap: 0px ~ 64px 까지 4px단위 증가<br/>
                gap(grid-gap), column-gap, row-gap 부분 적용가능<br/>
                ex) "gap-64", "gap-col-64"
              </p>
              <div className="flex-row m-20">  
                <div className="item w-full">grid-col-3<sub>&nbsp;/ 1</sub></div>
                <div className="item spBg text-c" 
                  style={{"minWidth":"64px","border":"1px dashed red"}}>
                  gap-col<br/>64px</div>
                <div className="item w-full">grid-col-3<sub>&nbsp;/ 2</sub></div>
                <div className="item spBg text-c" 
                  style={{"minWidth":"64px","border":"1px dashed red"}}>
                  gap-col<br/>64px</div>
                <div className="item w-full">grid-col-3<sub>&nbsp;/ 3</sub></div>
              </div>

              <p className="ml-28">
                ex) "gap-32", "gap-row-32"
              </p>
              <div className="flex-col m-20 mb-0">
                <div className="item">grid-col-3<sub>&nbsp;/ 1</sub></div>
                <div className="item spBg" 
                  style={{"minHeight":"32px","border":"1px dashed red"}}>
                  gap-row : 32px</div>
                <div className="item">grid-col-3<sub>&nbsp;/ 2</sub></div>
                <div className="item spBg" 
                  style={{"minHeight":"32px","border":"1px dashed red"}}>
                  gap-row : 32px</div>
                <div className="item">grid-col-3<sub>&nbsp;/ 3</sub></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-col-2 gap-20 mt-20">
          <div className="number-box">Sample</div>
          <div className="number-box">Code</div>
        </div>
        <div className="grid-col-2 gap-20">
          <div className="ex-text-area">
            <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
              패딩(Padding) 허용범위
            </p>
            <p className="ml-28">
              padding: 0px ~ 64px 까지 4px단위 증가<br/>
              padding left, right, top, bottom, [left-right], [top-bottom] 부분 적용가능<br/>
              ex) "p-16", "pt-16", "pb-16", "ptb-16", "pl-16", "pr-16", "plr-16" ...
            </p>
            <div className="grid-col-4 gap-24 gap-row-8 m-20 mb-0">
              <div className="item"><div className="spRed p-16">p-16</div></div>
              <div className="item"><div className="spRed pt-16">pt-16</div></div>
              <div className="item"><div className="spRed pb-16">pb-16</div></div>
              <div className="item"><div className="spRed ptb-16">ptb-16</div></div>
              <div className="item"><div className="spRed pl-16">pl-16</div></div>
              <div className="item"><div className="spRed pr-16">pr-16</div></div>
              <div className="item"><div className="spRed plr-16">plr-16</div></div>
            </div>
          </div>

          <div className="ex-code-area">
            <p>
              &lt;div className="container grid-col-3 <b>gap-24 gap-row-8</b>"&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item"&gt;1&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &lt;div className="spBg <b>ptb-8 plr-16</b>"&gt;2&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &lt;div className="spBg <b>p-8 mr-36</b>"&gt;3&lt;/div&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &lt;div className="spBg <b>p-0 plr-8</b>"&gt;3&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>ml-64</b>"&gt;4&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>mlr-40</b>"&gt;5&lt;/div&gt;<br/>
              &nbsp;&nbsp;
              &lt;div className="item <b>mt-24</b>"&gt;6&lt;/div&gt;<br/>
              &lt;/div&gt;
            </p>
          </div>
        </div>

        <div className="ex-text-area mt-20">
          <p><FontAwesomeIcon icon={faFish} size="1x" className="faFish" />
            마진(Margin) 허용범위
          </p>
          <p className="ml-28">
            margin: 0px ~ 64px 까지 4px단위 증가<br/>
            margin left, right, top, bottom, [left-right], [top-bottom] 부분 적용가능<br/>
            ex) "m-0", "mt-16", "mb-16", "mtb-40", "ml-16", "mr-16", "mlr-16" ...
          </p>
          <div className="grid-col-7 gap-24 m-20 mb-20">
            <div className="item-n"><div className="spRed m-20">m-20</div></div>
            <div className="item-n"><div className="spRed mt-16">mt-16</div></div>
            <div className="item-n flex end"><div className="spRed mb-16">mb-16</div></div>
            <div className="item-n"><div className="spRed mtb-16">mtb-16</div></div>
            <div className="item-n"><div className="spRed ml-16">ml-16</div></div>
            <div className="item-n"><div className="spRed mr-16 right">mr-16</div></div>
            <div className="item-n"><div className="spRed mlr-16">mlr-16</div></div>
          </div>
          <p className="ml-28">
            margin: auto 값 적용가능<br/>
            ex) "m-auto", "mt-auto", "mb-auto", "ml-auto", "mr-auto"
          </p>
          <div className="grid-col-5 gap-16 m-20 mb-0">
            <div className="item"><div className="spRed m-auto">m-auto</div></div>
            <div className="item"><div className="spRed mt-auto">mt-auto</div></div>
            <div className="item"><div className="spRed mb-auto">mb-auto</div></div>
            <div className="item"><div className="spRed ml-auto">ml-auto</div></div>
            <div className="item"><div className="spRed mr-auto">mr-auto</div></div>
          </div>
        </div>
        



      </div>

      







      <TopButton />
    </div>
  )
}

export default GridGap;