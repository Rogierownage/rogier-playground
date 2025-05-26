import { createContext, useContext } from "react"
import NavLinks from "./NavLinks"
import useUser from "./useUser";

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

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