import React from 'react';
import './App.css';
import Knight from "./components/knight/knight.jsx"
import Square from "./components/square/square.jsx"


function App() {
  return (
    <div className="App">
      <h1>DRAG AND DROP</h1>
      <p>
        <Square black >
          <Knight />
        </Square>
      </p>

    </div>
  );
}

export default App;
