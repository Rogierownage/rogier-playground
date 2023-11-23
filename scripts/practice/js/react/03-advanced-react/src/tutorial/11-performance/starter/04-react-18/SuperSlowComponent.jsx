import { useState } from 'react';

const newItems = Array.from({ length: 15000 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/vite.svg' alt='' />
    </div>
  );
});

const SuperSlowComponent = () => {
  const [items, setItems] = useState(newItems);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '2rem',
      }}
    >
      Super slow component
      {items}
    </div>
  );
};
export default SuperSlowComponent;
