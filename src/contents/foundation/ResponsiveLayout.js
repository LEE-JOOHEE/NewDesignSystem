import React from 'react'
import "./Foundation.css";
import { Link } from "react-router-dom";
import responsiveFixed from "../../static/images/responsive-1-fixed.svg";
import responsiveFluid from "../../static/images/responsive-2-fluid.svg";

import TopButton from "../../layout/TopButton";

function ResponsiveLayout() {
  return (
    <div className="doc">

      <div className="doc-wrap">
        <div className="cont-header">
          <div className="title">Responsive Layout Grids</div>
          <div className="descript">
          레이아웃 그리드 동작 방식을 설정하고 중단점을 중심으로  확장 및 축소되어야 합니다.
          </div>
        </div>

        <div className="contents">
          <div className="title">Fixed Behavior</div>
          <div className="descript">
          고정 동작에는 “고정” 컨테이너 너비와 위치가 설정돼야 합니다.
          </div>
          <div className="img-area-responsive">
            <img src={responsiveFixed} alt="responsive-layout-grid-fiexd-behavior" />
          </div>
        </div>

        <div className="contents">
          <div className="title">Fluid Behavior</div>
          <div className="descript">
          Fluid 레이아웃은 픽셀이 아닌 백분율로 측정되므로 
          화면 크기가 변경됨에 따라 컨테이너 너비가 증가하거나 감소합니다.
          </div>
          <div className="img-area-responsive">
            <img src={responsiveFluid} alt="responsive-layout-grid-fiexd-behavior" />
          </div>
        </div>



        <TopButton />

      </div>
    </div>
  )
}

export default ResponsiveLayout