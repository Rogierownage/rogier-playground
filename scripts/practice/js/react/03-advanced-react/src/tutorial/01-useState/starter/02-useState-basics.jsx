import { useState } from "react";
import React from "react";

const UseStateBasics = ({ startingCount }) => {
  const [count, setCount] = useState(startingCount ?? 0);

  return (
    <React.Fragment>
      <h2>{count}</h2>

      <button type="button" className="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
