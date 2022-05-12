import React, { useState } from "react";
import "./App.css";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const chooseSquare=(square)=>{

  }
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} shoosSquare={chooseSquare}/>
          <Square val={board[1]} shoosSquare={chooseSquare}/>
          <Square val={board[2]}  shoosSquare={chooseSquare}/>
        </div>
        <div className="row">
        <Square val={board[3]} shoosSquare={chooseSquare}/>
          <Square val={board[4]} shoosSquare={chooseSquare}/>
          <Square val={board[5]}  shoosSquare={chooseSquare}/>
        </div>
        <div className="row">
        <Square val={board[6]} shoosSquare={chooseSquare}/>
          <Square val={board[7]} shoosSquare={chooseSquare}/>
          <Square val={board[8]}  shoosSquare={chooseSquare}/>
        </div>
      </div>
    </div>
  );
}

export default App;
