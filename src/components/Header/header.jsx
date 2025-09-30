import "./header.css"
import { Link } from 'react-router-dom'; 

function Header({ onSignInClick, onSignUpClick }) {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
      <nav className='header__nav'>
        <Link className="header__home-btn">Home</Link>
        <button 
          className="header__signin-btn" 
          onClick={onSignInClick}    
        >
          Sign in
        </button>
      </nav>
    </header>
  );
}

export default Header;
