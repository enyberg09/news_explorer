import "./header.css";
import { Link, useLocation } from "react-router-dom"; 
import Navigation from "../Navigation/Navigation";

function Header({ 
  isLoggedIn,
  currentUser,
  onLogout,
  onSignInClick,
  isAnyModalOpen
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header 
      className={`header ${isSavedNewsPage ? "header_theme_light" : "header_theme_dark"}`}
    >
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>

      <nav className="navigation">
        <Navigation
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={onLogout}
          onSignInClick={onSignInClick}
          isSavedNewsPage={isSavedNewsPage}
        />
      </nav>
    </header>
  );
}

export default Header;
