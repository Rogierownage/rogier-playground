import { useState } from 'react';
import initialData from './data.js';
import List from './components/List.jsx';

const App = () => {
  const [people, setPeople] = useState(initialData);

  return <>
    <button className="btn" onClick={() => setPeople([])}>Clear list</button>
    <h2>Count: {people.length}</h2>
    <List people={people}></List>
  </>
};
export default App;
