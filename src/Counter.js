import React, { useState } from "react";
import './Counter.css'
function Counter() {
  const [state, setState] = useState(0);

  function increase() {
    setState(state + 1);
  }
  function decrease() {
    setState(state - 1);
  }
  return (
      <div className="Counter-container">
    <body className="Counter-body">
        <h1 className="Counter-h1">{state}</h1>
        <button className="Counter-button" onClick={decrease}>
        -
        </button>
        <button className="Counter-button" onClick={increase}>+
        </button>
    </body>
      </div>
  );
}
export default Counter;
