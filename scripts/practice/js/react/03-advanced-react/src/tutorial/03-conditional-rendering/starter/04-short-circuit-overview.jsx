import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, useName] = useState('Susan');

  return (
    <>
      <h2>short circuit overview</h2>

      <h2>{text && 'Text is truthy'}</h2>
      <h2>{text || 'Text is falsy'}</h2>
      <h2>{name && 'Name is truthy'}</h2>
      <h2>{name || 'Name is falsy'}</h2>
    </>
  );
};
export default ShortCircuitOverview;
