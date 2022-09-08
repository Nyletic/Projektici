import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((zadnjiBrojac) => --zadnjiBrojac)}>
        -
      </button>
    </>
  );
};

export default Counter;
