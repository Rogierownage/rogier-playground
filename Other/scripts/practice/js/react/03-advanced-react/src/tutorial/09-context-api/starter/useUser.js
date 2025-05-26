import { useState } from "react";

const useUser = (initialName) => {
    const [user, setUser] = useState({ 'name': initialName });
    const logout = () => setUser(null);

    return [user, logout];
};

export default useUser;