import { createContext } from "react"
import NavLinks from "./NavLinks"
import useUser from "./useUser";

export const NavbarContext = createContext();

const Navbar = () => {
    const [user, logout] = useUser('Elwin');

    return (
        <NavbarContext.Provider value={{user, logout}}>
            <p>Navbar</p>
            <NavLinks />
        </NavbarContext.Provider >
    );
}

export default Navbar