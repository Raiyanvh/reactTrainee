import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
        <h1>Exercise 1: Counter</h1>
        <h3>{counter}</h3>

        <div className="group-btn">
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>
            <button onClick={() => setCounter(prev => Math.max(0, prev - 1))}>
                Decrease
            </button>
            <button onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter;