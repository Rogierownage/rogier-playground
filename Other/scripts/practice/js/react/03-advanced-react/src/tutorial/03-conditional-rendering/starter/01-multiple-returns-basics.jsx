import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  if(isLoading){
    return (
      <button className="btn" type="button" onClick={() => setIsLoading(false)}>Loading. Click to finish.</button>
    );
  }

  return (
    <h2>Has loaded</h2>
  );
};

export default MultipleReturnsBasics;
