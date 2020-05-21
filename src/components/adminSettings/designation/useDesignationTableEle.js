import React from "react";
import { useState, useEffect } from "react";

const useDesignationTableEle = (thead, data) => {
  const [trow, setTrow] = useState([]);

  useEffect(() => {
    console.log(thead, data);
    let trow = {};
    let trowArr = [];

    data.map((data, i) => {
      thead.map((th) => (trow[th] = data[th.toLowerCase()]));
      trowArr.push(trow);
      return trowArr;
    });
    setTrow(trowArr);
  }, [data, thead]);
  return { trow };
};

export default useDesignationTableEle;
