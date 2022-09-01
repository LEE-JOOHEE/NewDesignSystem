import React from "react";
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
      </div>


      <div className="contents">
        <div className="comm-Header">Header</div>
        <div className="comm-Body plr-40">
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
        <div className="comm-Body plr-40">
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


      <div className="contents">
        <div className="comm-Container-auto">
          <div className="spBg col-span-3" style={{"height":"300px"}}>1</div>
          {/* <div className="spBg" style={{"height":"300px"}}>2</div> */}
          {/* <div className="spBg" style={{"height":"300px"}}>3</div> */}
          <div className="spBg col-span-3" style={{"height":"300px"}}>4</div>
          {/* <div className="spBg" style={{"height":"300px"}}>5</div> */}
          {/* <div className="spBg" style={{"height":"300px"}}>6</div> */}
          <div className="spBg col-span-3" style={{"height":"300px"}}>7</div>
          {/* <div className="spBg" style={{"height":"300px"}}>8</div> */}
          {/* <div className="spBg" style={{"height":"300px"}}>9</div> */}
          <div className="spBg col-span-3" style={{"height":"300px"}}>10</div>
          {/* <div className="spBg" style={{"height":"300px"}}>11</div> */}
          {/* <div className="spBg" style={{"height":"300px"}}>12</div> */}
        </div>
      </div>

      <div className="contents">
        <div className="comm-Header">Header</div>
        <div className="comm-Body p-0">
          <div className="fluid-body">
            <div className="comm-Container-auto pt-16">
              <div className="item col-span-12" style={{"height":"auto","background":"#886BFF"}}>보라색</div>
            </div>
            <div className="comm-Container-auto ptb-24">
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#ccc"}}>연회색</div>
            </div>
            <div className="comm-Container-auto pb-24">
              <div className="item col-span-3" style={{"height":"auto","background":"#aaa"}}>진회색</div>
              <div className="item col-span-3" style={{"height":"auto","background":"#aaa"}}>진회색</div>
              <div className="item col-span-3" style={{"height":"auto","background":"#aaa"}}>진회색</div>
              <div className="item col-span-3" style={{"height":"auto","background":"#aaa"}}>진회색</div>
            </div>
            <div className="comm-Container-auto pb-24">
              <div className="item col-span-4" style={{"height":"auto","background":"#3CC13B"}}>초록색</div>
              <div className="item col-span-4" style={{"height":"auto","background":"#3CC13B"}}>초록색</div>
              <div className="item col-span-4" style={{"height":"auto","background":"#3CC13B"}}>초록색</div>
            </div>
            <div className="comm-Container-auto pb-16">
              <div className="item col-span-6" style={{"height":"auto","background":"#F3BB1C"}}>노랑색</div>
              <div className="item col-span-6" style={{"height":"auto","background":"#F3BB1C"}}>노랑색</div>
            </div>

            <div className="mtb-16" style={{"fontSize":"2rem"}}>예외검토</div>
            <div className="comm-Container-auto pt-16">
              <div className="item col-span-5" style={{"height":"auto","background":"#aaa"}}>5</div>
              <div className="item col-span-2" style={{"height":"auto","background":"#aaa"}}>2</div>
              <div className="item col-span-5" style={{"height":"auto","background":"#aaa"}}>5</div>
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
            
          </div>

        </div>

      </div>

      

    </div>
  )
}

export default Grid;