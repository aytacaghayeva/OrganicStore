import "./Header.css";
import { Link } from 'react-router-dom';
import Logo from "./images/organicLogo.png";

function Header({ itemCount }) {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="LOGO" className="logoImg" />
            </div>
            <div className="list">
                <Link to="/" className="link active-link">Home</Link>
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/blog" className="link">Blog</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <div className="shopping-bag-main">
                <div className="shopping-bag">
                    🛍️
                </div>
                {itemCount >= 0 && (
                    <div className="badge">{itemCount}</div>
                )}
            </div>
        </div>
    );
}

export default Header;
