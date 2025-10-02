import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  currentUser,
  onLogout,
  onSignInClick,
  isMobile,
  closeMobileMenu,
  isSavedNewsPage,
}) {
  const location = useLocation();
  const currentPath = location.pathname;

  const theme = isSavedNewsPage ? "light" : "dark";

  const handleLinkClick = () => {
    if (isMobile && closeMobileMenu) closeMobileMenu();
  };

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <button
          type="button"
          className={`navigation__btn_user_${isMobile ? "mobile" : "desktop"} navigation__btn_user_${theme}`}
          onClick={onLogout}
        >
          {currentUser?.name || "User"} (Logout)
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className={`navigation__btn_signin_${isMobile ? "mobile" : "desktop"} navigation__btn_signin_${theme}`}
          onClick={onSignInClick}
        >
          Sign in
        </button>
      );
    }
  };

  return (
    <ul className={`navigation__menu navigation__menu_type_${isMobile ? "mobile" : "desktop"}`}>
      <li>
        <Link
          to="/"
          className={`navigation__link navigation__link_theme_${theme} ${
            currentPath === "/" ? "navigation__link_active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Home
        </Link>
      </li>

      {isLoggedIn && (
        <li>
          <Link
            to="/saved-news"
            className={`navigation__link navigation__link_theme_${theme} ${
              currentPath === "/saved-news" ? "navigation__link_active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Saved articles
          </Link>
        </li>
      )}

      <li>{renderAuthButton()}</li>
    </ul>
  );
}

export default Navigation;
