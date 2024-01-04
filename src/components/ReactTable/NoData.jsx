import React from "react";
import NoDataLogo from "../../../images/NoData.svg";
const NoData = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <img src={NoDataLogo} alt="no data" height={"350px"} width={"350px"} />
        <div>Nothing To Display!</div>
      </div>
    </div>
  );
};

export default NoData;
