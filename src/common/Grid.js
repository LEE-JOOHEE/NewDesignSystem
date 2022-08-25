import React, { useState, useEffect } from "react";
import "./Grid.css";

function Grid() {

  function gridColNum(){
    const items = [];
    for(let i = 1; i < 13; i++){
      items.push(<div className="item">{[i]}</div>)
    }
    return items;
  }

  return (
    <div className="Grid">

      <div className="container grid-col-12">
        { gridColNum() }
      </div>

      <div style={{'height' : '30px'}}></div>
      
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

      <div style={{'height' : '30px'}}></div>

      <div className="container grid-col-12 gap-20">
        <div className="item col-span-2">1</div>
        <div className="item col-span-2">2</div>
        <div className="item col-span-2">3</div>
        <div className="item col-span-2">4</div>
        <div className="item col-span-2">5</div>
        <div className="item col-span-2">6</div>
        {/* <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item">10</div>
        <div className="item">11</div>
        <div className="item">12</div> */}
      </div>


      <div className="contents">
        <div className="comm-Header">Header</div>
        <div className="comm-Body">
          <div className="fixed-body grid-col-2 gap-16 text-c">
            <div className="comm-Container">
              <p>container 1</p>
              <div className="comm-SectionWrap">
                <div className="comm-Section">section</div>
              </div>
            </div>
            <div className="comm-Container">
              <p>container 2</p>
              <div className="comm-SectionWrap">
                <div className="comm-Section">section</div>
                <div className="comm-Section">section</div>
                <div className="comm-Section">section</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="comm-Header">Header</div>
        <div className="comm-Body">
          <div className="fluid-body grid-col-2 gap-16 text-c">
            <div className="comm-Container">
              <p>container 1</p>
              <div className="comm-SectionWrap">
                <div className="comm-Section">section</div>
              </div>
            </div>
            <div className="comm-Container">
              <p>container 2</p>
              <div className="comm-SectionWrap">
                <div className="comm-Section">section</div>
                <div className="comm-Section">section</div>
                <div className="comm-Section">section</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Grid;