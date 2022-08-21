import React, { useState, useEffect } from "react";

//Three buttons increse by 1 , decrease by 2 and third will reset to 0
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, []);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount((prevState) => prevState - 2)}>
        Decrease
      </button>
      {count === 0 ? null : <button onClick={() => setCount(0)}>Reset</button>}
    </div>
  );
};

export default Counter;
