import React from "react";

let count = 0;

const handleClick = () => {
  count++;

  console.log(count);
}

const ErrorExample = () => (
  <React.Fragment>
    <p>{count}</p>
    <button onClick={handleClick}>Increment</button>
  </React.Fragment>
)

export default ErrorExample;
