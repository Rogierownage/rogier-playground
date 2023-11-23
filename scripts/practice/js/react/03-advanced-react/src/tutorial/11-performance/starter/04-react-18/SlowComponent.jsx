import { Suspense, lazy, useState } from 'react';
const AnotherSlowComponent = lazy(() => import('./AnotherSlowComponent'));
const SuperSlowComponent = lazy(() => import('./SuperSlowComponent'));

const newItems = Array.from({ length: 2000 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/vite.svg' alt='' />
    </div>
  );
});

const SlowComponent = () => {
  const [showThird, setShowThird] = useState(false);
  const [items, setItems] = useState(newItems);
  
  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <button className='btn' onClick={() => setShowThird(!showThird)}>Nested toggle</button>
      <Suspense fallback={<h5>Loading nested...</h5>}>
        {showThird && <SuperSlowComponent />}
      </Suspense>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        Slow component
        {items}
      </div>
      <AnotherSlowComponent />
    </Suspense>
  );
};
export default SlowComponent;
