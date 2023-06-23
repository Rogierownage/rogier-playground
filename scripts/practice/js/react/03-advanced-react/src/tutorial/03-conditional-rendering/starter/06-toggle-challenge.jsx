import { useState } from "react";

const ToggleChallenge = () => {
  let [isToggled, setToggled] = useState(false);

  return (
    <>
      <button className="btn" onClick={ () => setToggled(!isToggled)}>Toggle</button>
      {isToggled && (
        <>
          <br/><h2>Is toggled</h2>
        </>
      )}
    </>
  );
};

export default ToggleChallenge;
