import "./main.css";
import { useState, useEffect } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

function Main({ articles }) {
  const [newsArticles, setNewsArticles] = useState(articles || []);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Update articles if prop changes (e.g., from App.jsx)
  useEffect(() => {
    if (articles) {
      setNewsArticles(articles);
    }
  }, [articles]);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);

    // Simulate API call (replace this with real API call later)
    setTimeout(() => {
      const simulatedResults = [
        {
          id: Date.now(),
          title: `Result for "${searchTerm}"`,
          description: "This is just a test article.",
          image: "https://via.placeholder.com/400x200",
          source: "Test Source",
          publishedAt: "2024-01-01",
        },
      ];
      setNewsArticles(simulatedResults);
      setLoading(false);
    }, 1500);
  };

  // handle save/unsave from child cards
  const handleSaveArticle = (article, isSaved) => {
    if (isSaved) {
      setSavedArticles((prev) => [...prev, article]);
    } else {
      setSavedArticles((prev) => prev.filter((a) => a.id !== article.id));
    }
  };

  return (
    <main className="main">
      <img
        src="../../src/images/main-page-pic.svg"
        alt="Main page pic"
        className="main__image"
      />

      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal account.
        </p>

        <form className="main__search-form" onSubmit={handleSubmit}>
          <input
            className="main__search-input"
            type="text"
            placeholder="Enter topic"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="main__search-button" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* NEWS SECTION: preloader or cards */}
      <section className="news-section">
        {loading ? (
          <div className="news-section__preloader">
            <Preloader />
            <p className="news-section__preloader-text">Searching for news...</p>
          </div>
        ) : (
          <NewsCardList
            newsArticles={newsArticles}
            onSaveArticle={handleSaveArticle}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
