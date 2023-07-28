import { useContext } from "react"
import { NavbarContext } from "./Navbar"

const UserContainer = () => {
    const {user, logout} = useContext(NavbarContext);

    return (
        <>
            <p>UserContainer ({user?.name})</p>

            {user ? <button className="btn" onClick={logout}>Logout</button> : <p>Not logged in</p>}
        </>
    )
}

export default UserContainer