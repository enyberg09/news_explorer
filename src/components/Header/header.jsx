
import "./header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <p className="header__title">NewsExplorer</p>
            <nav className='header__nav'>
    <Link to="/" className="header__home-btn">Home</Link>
                <Link to="/saved-news" className="header__signin-btn">Sign in</Link>
  </nav>
        </header>
        
    );
}

export default Header;
