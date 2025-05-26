import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(isMounted);

    if(!isMounted.current){
      console.log('First mount (is mounted = false)');

      isMounted.current = true;
    }
  }, [value]);

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input' ref={refContainer} />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      <h1>Value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        Increase
      </button>
    </div>
  );
};

export default UseRefBasics;
