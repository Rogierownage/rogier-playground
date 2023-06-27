import { useState } from "react";

const MultipleInputs = () => {
  const [inputs, setInputs] = useState({name: '', email: '', password: ''});

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>

        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-input' id='name' name="name" value={inputs.name} onChange={handleInput} />
        </div>

        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" value={inputs.email} onChange={handleInput} />
        </div>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" value={inputs.password} onChange={handleInput} />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
