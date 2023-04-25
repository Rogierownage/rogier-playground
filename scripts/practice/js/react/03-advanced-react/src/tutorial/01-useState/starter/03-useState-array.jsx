import React, { useState } from "react";
import {data} from "../../../data";

const UseStateArray = () => {
  let [people, setPeople] = useState(data);
  
  const deletePerson = (id) => { setPeople(people.filter((person) => person.id !== id)); };

  return (
    <>
      <button type="button" className="btn mb-8" onClick={() => setPeople([])}>Clear list</button>

      { people.map((person) => (
        <div key={person.id} className="mb-2">
          <span>{person.name}</span>
          <button type="button" className="btn ml-2" onClick={() => deletePerson(person.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default UseStateArray;
