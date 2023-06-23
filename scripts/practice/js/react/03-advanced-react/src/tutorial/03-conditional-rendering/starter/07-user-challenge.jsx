import { useState } from "react";

const UserChallenge = () => {
  let [user, setUser] = useState(null);

  const loginAs = (name) => {
    setUser({ name: name })
  };

  const login = () => {
    loginAs("桜井政博");
  };

  const logout = () => {
    setUser(null);
  };
  
  return <>
    {user ? <>
      <button className="btn" onClick={logout}>Logout</button> <br />
      Welcome, {user.name}
    </> : <>
      <button className="btn" onClick={login}>Login</button>
    </>}
  </>;
};

export default UserChallenge;
