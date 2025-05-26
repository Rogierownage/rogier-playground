import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('Rogier');
  const [email, setEmail] = useState('rogier@paqt.com');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submit', name, email)
  }

  return (
    <form className='form' onSubmit={handleSubmit} >
      <h4>Controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input type='text' className='form-input' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-input' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit' className='btn btn-block'>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;