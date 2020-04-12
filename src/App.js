import React from 'react';
import './App.css';
import Knight from "./components/knight/knight.jsx"
import Square from "./components/square/square.jsx"
import Board from "./components/board/board.jsx"


function App() {
  return (
    <div>
      <h1>DRAG AND DROP</h1>
      <Board knightPosition={[0, 1]} />


    </div>
  );
}

export default App;
