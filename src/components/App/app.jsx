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

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  function handleLogin(data) {
    console.log("Logging in:", data);
    setCurrentUser({ name: data.username || "User" });
    setIsLoginOpen(false);
  }

  function handleRegister(data) {
    console.log("Registering:", data);
    setCurrentUser({ name: data.username || "User" });
    setIsRegisterOpen(false);
  }

  function handleSaveArticle(article) {
    saveArticle(article);
    setSavedArticles(getSavedArticles());
  }

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

return (
  <BrowserRouter>
    <Header
      onSignInClick={() => setIsLoginOpen(true)}
      onSignUpClick={() => setIsRegisterOpen(true)}
    />

    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          <>
            <Main articles={testArticle} />
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
