import React from "react";
import "../App.css"
function Square({ val, shoosSquare }) {
  return <div onClick={shoosSquare} className="square">{val}</div>;
}

export default Square;
