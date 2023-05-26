import { Fragment, useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.github.com/users');

      setUsers(await response.json());
    })();
  }, []);

  const clearUsers = () => setUsers([]);

  return (
    <>
      <button type="button" className="btn" onClick={clearUsers}>Clear all users</button>
      {users.map((user) => (
        <Fragment key={user.id} >
          <img src={user.avatar_url}/>
          <p>{user.login}</p>
          <p><a href={user.html_url}>{user.html_url}</a></p> 
        </Fragment>
      ))}
    </>
  )
};
export default FetchData;
