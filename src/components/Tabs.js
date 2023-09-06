import React from "react";

export default function Tabs({selectedTab}) {
  return (
    <div className="tabs tabu position-fixed mt-5 ">
      <div className="row mt-3">
        <div className={`col-4 d-flex justify-content-center border-bottom border-dark border-1 align-items-center pb-3 fs-5 ${selectedTab===1?"border-bottom border-dark border-3 text-dark fw-bolder":""}`}>
          1 | PERSONAL DETAILS
        </div>
        <div className={`col-4 d-flex justify-content-center border-bottom border-dark border-1 align-items-center pb-3 fs-5 ${selectedTab===2?"border-bottom border-dark border-3 text-dark fw-bolder":""}`}>
          2 | GENERAL INFO
        </div>
        <div className={`col-4 d-flex justify-content-center border-bottom border-dark border-1 align-items-center pb-3 fs-5 ${selectedTab===3?"border-bottom border-dark border-3 text-dark fw-bolder":""}`}>
          3 | OVERALL INFO
        </div>
      </div>
    </div>
  );
}
