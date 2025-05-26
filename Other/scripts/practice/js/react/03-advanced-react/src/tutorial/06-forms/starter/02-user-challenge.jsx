import { useState } from "react";
import { data as initialUsers } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(initialUsers)

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(users.map((user) => user.id));

    const id = Math.max(...users.map((user) => user.id)) + 1;

    setUsers([...users, {id, name}]);
    setName('');
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button type="button" className='btn' onClick={() => deleteUser(user.id)}>Delete</button>
          <br></br><br></br>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
