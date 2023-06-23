import { useEffect, useState } from "react";

const CleanupFunction = () => {
  let [isToggled, setToggle] = useState(false);

  return <>
    <button className="btn" onClick={() => setToggle(!isToggled)}>Toggle</button>
    {isToggled && <SecondComponent></SecondComponent>}
  </>
};

const SecondComponent = () => {
  let [name, setName] = useState(null);

  useEffect(() => {
    setName('Banana');

    console.log('useEffect in second component. Triggers after unmount and remount');
  }, [])

  return <>
    <h2>Second component</h2>
    <button className="btn" onClick={() => setName(name + 'na')}>Set name</button>
    {name && <p>Hello, {name}</p>}
  </>
}

export default CleanupFunction;
