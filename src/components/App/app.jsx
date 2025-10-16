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

import { searchNews } from "../../Api/newsApi.jsx";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(getUser());
  const [savedArticles, setSavedArticles] = useState(getSavedArticles());

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

function handleLogin(data) {
  console.log("Logging in:", data);
  const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  const userData = storedUsers[data.email];
  
  setCurrentUser({ 
    name: userData?.name || "User",
    email: data.email 
  });
  setIsLoginOpen(false);
}

function handleRegister(data) {
  console.log("Registering:", data);
  
  const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  storedUsers[data.email] = { name: data.name, email: data.email };
  localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
  
  setCurrentUser({ name: data.name, email: data.email });
  setIsRegisterOpen(false);
}

function handleLogout() {
setCurrentUser(null);
}

function handleSaveArticle(article, isSaved) {
  console.log("handleSaveArticle called with:", { article, isSaved });
  
   if (isSaved) {
    console.log("Saving article");

    const articleWithKeyword = {
      ...article,
      keyword: searchQuery || "misc",
    };

    const updated = [...savedArticles, articleWithKeyword];
    setSavedArticles(updated);
    console.log("Updated saved articles:", updated);
  } else {
    console.log("Removing article");
    const updated = savedArticles.filter(a => a.title !== article.title);
    setSavedArticles(updated);
  }
};

async function handleSearch(query) {
  console.log("Search started - isLoading:", true);
  setIsLoading(true);
  setHasSearched(true);
  setSearchQuery(query);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    const fetchedArticles = await searchNews(query);
    console.log("Got articles:", fetchedArticles.length);
    setArticles(fetchedArticles);
  } catch (error) {
    console.error("Search failed:", error);
    setArticles([]);
  } finally {
    console.log("Search finished - isLoading:", false);
    setIsLoading(false);
  }
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
