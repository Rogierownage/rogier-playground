import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000)
  };

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick} type="button">Increment</button>
    </>
  );
};

export default UseStateGotcha;
