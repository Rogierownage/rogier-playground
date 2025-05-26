import { Suspense, lazy, useState } from 'react';
const SlowerComponent = lazy(() => import('./SlowerComponent'));
const SuperSlowComponent = lazy(() => import('./SuperSlowComponent'));

const newItems = Array.from({ length: 1500 }, (_, index) => {
  return (
    <div key={index}>
      <img src='/vite.svg' alt='' />
    </div>
  );
});

const SlowComponent = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(newItems);
  
  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <button className='btn' onClick={() => setShow(!show)}>Nested toggle</button>
      <Suspense fallback={<h5>Loading nested...</h5>}>
        {show && <SuperSlowComponent />}
      </Suspense>
      <SlowerComponent />
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
    </Suspense>
  );
};
export default SlowComponent;
