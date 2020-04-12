import React from 'react'
import Knight from "../knight/knight.jsx"
import Square from "../square/square.jsx"
import BoardSquare from "../square/boardsquare.jsx"

import { moveKnight, canMoveKnight } from "../../helper/helper.js"

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'





function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}


function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}


export default function Board({ knightPosition }) {

 
  

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '99%',
        height: '99vh',
        display: 'flex',
        flexWrap: 'wrap',
        borderStyle: 'solid'
      }}
    >
    
    <DndProvider backend={Backend}> 
    {squares}
    </DndProvider>

      
    </div>
  )
}