const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    console.log(Object.fromEntries(new FormData(form)));
    form.reset();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
