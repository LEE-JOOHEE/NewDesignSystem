import React from 'react'
import "./DocHeader.css";
import item from "../../item.json";
import { Link } from "react-router-dom";

function DocHeader(props) {

  const pathname = window.location.pathname;
  const pathIndex = pathname.substr(-1, 1)
  
  // 참고사이트
  // https://haerim95.tistory.com/43
  const jsonListData = item.filter((jsonData) => {
    if(pathIndex === jsonData.idx){
      return jsonData;
    }
  }).map((jsonData, i) => {
    const discListArr = jsonData.descList;
    const siteListArr = jsonData.siteList;
    return(
      <>
        <div className="title">{jsonData.title}</div>
        <div className="descript">
          <pre>{jsonData.desc}</pre>
        </div>

        {discListArr.map((descList) => (
          <div className="descript-li"><b>ㆍ</b>
            <Link to={`${descList.link}`}>
              {descList.list}
            </Link>
          </div>
        ))}

        <div className="go-site">참고사이트</div>
        {siteListArr.map((siteList) => (
          <div className="descript-li">
            <a href={`${siteList.link}`} target="_blank">
              {siteList.site}
            </a>
          </div>
        ))}


      </>
    )
  })
  
  const itemDescList = item[0].descList;
  const itemSiteList = item[0].siteList;

  return (
    <div className="doc">
      <div className="doc-header">

        {jsonListData}
        
        {(pathIndex === "/") &&
          <>
            <div className="title">{item[0].title}</div>
            <div className="descript">
              <pre>{item[0].desc}</pre>
            </div>
            {itemDescList.map((descList) => (
              <div className="descript-li"><b>ㆍ</b>
                <Link to={`${descList.link}`}>
                  {descList.list}
                </Link>
              </div>
            ))}
            <div className="go-site">참고사이트</div>
            {itemSiteList.map((siteList) => (
              <div className="descript-li">
                <a href={`${siteList.link}`} target="_blank">
                  {siteList.site}
                </a>
              </div>
            ))}
          </>
        }
        
      </div>
    </div>
  )

}

export default DocHeader