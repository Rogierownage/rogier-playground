import logo from '../images/logo.svg';

const Navbar = ({links, socialIcons}) => (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <ul className="nav-links" id="nav-links">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="nav-link">{link.content}</a>
                    </li>
                ))}
            </ul>

            <ul className="nav-icons">
                {socialIcons.map((icon) => (
                    <a key={icon.href} href={icon.href} target="_blank" className="nav-icon" rel="noreferrer">
                        <i className={'fab ' + icon.icon}></i>
                    </a>
                ))}
                <li>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;