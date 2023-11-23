import { useState } from 'react';

const newItems = Array.from({ length: 2000 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/vite.svg' alt='' />
    </div>
  );
});

const AnotherSlowComponent = () => {
  const [items, setItems] = useState(newItems);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '2rem',
      }}
    >
      Another slow component
      {items}
    </div>
  );
};
export default AnotherSlowComponent;
