// import React from "react";
import { useState, useEffect } from "react";

const useDesignationTableEle = (thead, data) => {
  const [trow, setTrow] = useState([]);

  useEffect(() => {
    let trow = {};
    let trowArr = [];

    data.map((data, i) => {
      thead.map((th) => (trow[th] = data[th]));
      trowArr.push(trow);
      trow = {};
      return trowArr;
    });
    setTrow(trowArr);
  }, [data, thead]);
  return { trow };
};

export default useDesignationTableEle;
