import { useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      {/* Note: I'm pretty sure you should use React.memo in cases like these, and not what i do here. */}
      {useMemo(() => (
        <List people={people} removePerson={removePerson} />
      ), [people])}
      
    </section>
  );
};
export default LowerState;
