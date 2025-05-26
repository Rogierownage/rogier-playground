import { useState, useTransition } from 'react';

import SlowComponent from './SlowComponent';

const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [showSlowComponent, setShowSlowComponent] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 15000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='' />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? <h5>
        Loading...
      </h5> : <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>}
      <button className="btn" onClick={() => setShowSlowComponent(!showSlowComponent)}>Toggle</button>
      {showSlowComponent && <SlowComponent />}
    </section>
  );
};
export default LatestReact;
