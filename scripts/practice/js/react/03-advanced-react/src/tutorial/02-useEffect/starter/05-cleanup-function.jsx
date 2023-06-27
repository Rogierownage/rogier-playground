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
  const  clickHandler = () => console.log('event listener');

  console.log('inside component code');

  useEffect(() => {
    console.log('useEffect in second component. Triggers after unmount and remount');
    const interval = setInterval(() => {
      console.log('useEffect in second component, in interval.  ');

    }, 1000)

    window.addEventListener('click', clickHandler);

    return () => {
      clearInterval(interval);

      window.removeEventListener('click', clickHandler);

      console.log('cleanup function in second component');
    }
  }, [])

  return <>
    <h2>Second component</h2>
    <button className="btn" onClick={() => setName(name + 'na')}>Set name</button>
    {name && <p>Hello, {name}</p>}
  </>
}

export default CleanupFunction;
