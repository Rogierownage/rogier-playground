import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Peter', age: 24, hobby: 'Reading books'});
  const setJohn = () => {
    setPerson({name: 'John', age: 28, hobby: 'Screaming at the computer'});
  }

  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={setJohn}>Show John</button>
    </>
  )
};

export default UseStateObject;
