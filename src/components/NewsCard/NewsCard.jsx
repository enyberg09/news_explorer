import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, onSave, onDelete, isLoggedIn, isSavedNewsPage = false }) {
  const [saved, setSaved] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  // Determine button class dynamically
  const btnClassName = isSavedNewsPage
    ? "news-card__delete-btn" // delete style on saved articles page
    : `news-card__save-btn ${saved ? "news-card__save-btn-saved" : ""}`; // save style otherwise

  function handleSaveClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (isSavedNewsPage) {
      // Delete article if on saved articles page
      if (onDelete) onDelete(article);
    } else {
      // Save article if on search results page
      if (!isLoggedIn) return;
      setSaved(s => !s);
      if (onSave) onSave(article, !saved);
    }
  }

  return (
    <article className="news-card">
      <div className="news-card__media">
        {article.urlToImage && !imageError ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="news-card__image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="news-card__placeholder">No image available</div>
        )}

        {/* Keyword top-left for saved articles */}
        {isSavedNewsPage && article.keyword && (
          <div className="news-card__keyword">
            {article.keyword.charAt(0).toUpperCase() + article.keyword.slice(1)}
          </div>
        )}

        <button
          type="button"
          className={btnClassName}
          onClick={handleSaveClick}
          aria-label={isSavedNewsPage ? "Remove from saved" : saved ? "Unsave article" : "Save article"}
          aria-pressed={saved}
        >
          {/* Tooltip logic */}
          {!isLoggedIn && !isSavedNewsPage && (
            <span className="news-card__tooltip">Sign in to save articles</span>
          )}
          {isSavedNewsPage && (
            <span className="news-card__tooltip">Remove from saved</span>
          )}
        </button>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source?.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
