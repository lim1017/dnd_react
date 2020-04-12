import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from "./components/board/board.jsx"
import { observe, moveKnight } from "./helper/helper.js"


import * as serviceWorker from './serviceWorker';


// function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }









observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />,  document.getElementById('root')),
)


  // ReactDOM.render(<Board knightPosition={observe(knightPosition)} />,  document.getElementById('root')),


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
