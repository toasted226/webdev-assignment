import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./assets/logo.png";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px'
};

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo}/>
                <Link to="/" style={linkStyle}><h1>gamealot</h1></Link>
            </div>
            <ul>
                <li><Link to="/computers" style={linkStyle}>Computers</Link></li>
                <li><Link to="/games" style={linkStyle}>Games</Link></li>
                <li><Link to="/checkout" style={linkStyle}>Checkout</Link></li>
                <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
        </nav>
    );
}
