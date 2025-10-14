import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../About/about.jsx";
import Main from "../Main/main.jsx";
import Footer from "../Footer/footer.jsx";
import Header from "../Header/header.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";

import Preloader from "../Preloader/Preloader.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";

import {
  getUser,
  setUser,
  getSavedArticles,
  saveArticle,
} from "../../utils/storage.jsx";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(getUser());
  const [savedArticles, setSavedArticles] = useState(getSavedArticles());

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

   const testArticle = [
    {
      id: 1,
      publishedAt: "2024-01-15",
      title: "Breaking: Major Tech Breakthrough",
      description: "Scientists discover revolutionary new technology",
      source: { name: "Tech News" },
    },
    {
      id: 2,
      publishedAt: "2024-01-14",
      title: "Climate Change Update",
      description: "New research shows promising environmental trends",
      source: { name: "Environmental Times" },
    },
    {
      id: 3,
      publishedAt: "2024-01-13",
      title: "Sports Championship Results",
      description: "Local team wins major tournament in exciting finale",
      source: { name: "Sports Daily" },
    },
  ];


  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

function handleLogin(data) {
  console.log("Logging in:", data);
  setCurrentUser({ name: data.name || "User" });
  setIsLoginOpen(false);
}

function handleRegister(data) {
  console.log("Registering:", data);
  setCurrentUser({ name: data.name || "User" });
  setIsRegisterOpen(false);
}

function handleLogout() {
setCurrentUser(null);
}

function handleSaveArticle(article) {
  saveArticle(article);
  setSavedArticles(getSavedArticles());
}

function handleSearch(query) {
  setIsLoading(true);
  setHasSearched(true);
  setSearchQuery(query);
  
  setTimeout(() => {
    setArticles(testArticle);
    setIsLoading(false);
  }, 5000); 
}

return (
  <BrowserRouter>
   <Header
      currentUser={currentUser}
      isLoggedIn={!!currentUser}
      onSignInClick={() => setIsLoginOpen(true)}
      onSignUpClick={() => setIsRegisterOpen(true)}
      onLogout={handleLogout}
  />
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          <>
            <Main 
            onSearch={handleSearch}
            isLoggedIn={!!currentUser}
            />
            {hasSearched && (
                <section className="search-results">
                  {isLoading ? (
                    <div className="search-results__loading">
                      <Preloader />
                      <p className="search-results__text">
                        Searching for news...
                      </p>
                    </div>
                  ) : (
                    <NewsCardList
                      articles={articles}
                      onSaveArticle={handleSaveArticle}
                      isLoggedIn={!!currentUser}
                    />
                  )}
                </section>
              )}
            <About />
            <Footer />
          </>
        }
      />

      {/* Saved News route */}
      <Route
        path="/saved-news"
        element={
          <SavedNews
            currentUser={currentUser}
            savedArticles={savedArticles}
            onDeleteArticle={(article) => {
              setSavedArticles(
                savedArticles.filter((a) => a.title !== article.title)
              );
            }}
          />
        }
      />
    </Routes>

    {/* Modals stay global */}
    <LoginModal
      isOpen={isLoginOpen}
      onClose={() => setIsLoginOpen(false)}
      onLogin={handleLogin}
      switchToRegister={() => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
      }}
    />

    <RegisterModal
      isOpen={isRegisterOpen}
      onClose={() => setIsRegisterOpen(false)}
      onRegister={handleRegister}
      switchToLogin={() => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
      }}
    />
  </BrowserRouter>
);
}

export default App;
