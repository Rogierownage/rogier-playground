import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './SlowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  const bigValue = useMemo(() => slowFunction(count), [count]);

  const removePerson = useCallback((id) => {
    setPeople(people.filter((person) => person.id !== id));
  }, [people]);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <p>{bigValue}</p>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
