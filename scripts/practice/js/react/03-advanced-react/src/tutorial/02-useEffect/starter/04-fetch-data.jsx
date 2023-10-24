import { Fragment, useCallback, useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchData = useCallback((async () => {
    const response = await fetch('https://api.github.com/users');

    setUsers(await response.json());
  }), []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
