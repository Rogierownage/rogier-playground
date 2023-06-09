import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Susan');
  const [user, setUser] = useState({ name: 'John' });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      <h2>short circuit - examples</h2>
      <h2>{text || 'Default text'}</h2>
      {isEditing && (
        <p>Is editing</p>
      )}
      {!isEditing && (
        <p>Is not editing</p>
      )}
      {isEditing ? (
        <p>Is editing</p>
      ) : (
        <p>Is not editing</p>
      )}

      {user && <SomeComponent name={user.name}/>} 
    </>
  );
};

const SomeComponent = ({name}) => {
  return (
    <h1>Hello, {name}</h1>
  );
}

export default ShortCircuitExamples;
