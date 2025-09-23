import "./main.css"
import { useState } from 'react';
import NewsCardList from './NewsCardList/NewsCardList';

function Main() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted!", searchTerm);

    // temporary test articles
    const testArticles = [
      {
        id: 1,
        title: `Result for "${searchTerm}"`,
        description: "This is just a test article.",
        image: "https://via.placeholder.com/400x200",
        source: "Test Source",
        publishedAt: "2024-01-01"
      }
    ];
    setNewsArticles(testArticles);
  };

  // handle save/unsave from child cards
  const handleSaveArticle = (article, isSaved) => {
    if (isSaved) {
      setSavedArticles(prev => [...prev, article]);
    } else {
      setSavedArticles(prev => prev.filter(a => a.id !== article.id));
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

        <NewsCardList 
          newsArticles={newsArticles} 
          onSaveArticle={handleSaveArticle} 
        />
      </div>
    </main>
  );
}

export default Main;
