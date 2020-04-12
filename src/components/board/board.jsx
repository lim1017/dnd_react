import React from 'react'
import Knight from "../knight/knight.jsx"
import Square from "../square/square.jsx"
import { moveKnight, canMoveKnight } from "../../helper/helper.js"


function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div key={i} 
        style={{ width: '12.5%', height: '12%' }}
        onClick={() => handleSquareClick(x, y)}
        >
      <Square black={black}>{piece}</Square>
    </div>
  )
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
      {squares}
    </div>
  )
}