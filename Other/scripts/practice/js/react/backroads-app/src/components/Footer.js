import { socialIcons } from "../data";

const Footer = ({links}) => (
    <footer className="section footer">
        <ul className="footer-links">
            {links.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className="footer-link">{link.content}</a>
                </li>
            ))}
        </ul>
        <ul className="footer-icons">
            {socialIcons.map((icon) => (
                <li key={icon.href}>
                    <a href={icon.href} target="_blank" className="footer-icon" rel="noreferrer">
                        <i className={'fab ' + icon.icon}></i>
                    </a>
                </li>
            ))}
        </ul>
        <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span>{ new Date().getFullYear() }</span> all rights reserved
        </p>
    </footer>
);

export default Footer;