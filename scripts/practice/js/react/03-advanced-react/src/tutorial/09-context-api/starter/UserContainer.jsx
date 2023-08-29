import { useNavbarContext } from "./Navbar";

const UserContainer = () => {
    const {user, logout} = useNavbarContext();

    return (
        <>
            <p>UserContainer ({user?.name})</p>

            {user ? <button className="btn" onClick={logout}>Logout</button> : <p>Not logged in</p>}
        </>
    )
}

export default UserContainer