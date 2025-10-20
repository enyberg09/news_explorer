import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, onSave, isLoggedIn }) {
    const [saved, setSaved] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    function handleSave(e) {
        e.preventDefault();
        if (!isLoggedIn) return;
        setSaved(s => !s);
        if (onSave) onSave(article, !saved);
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

            <button
                type="button"
                className={`news-card__save-btn ${saved ? "is-saved" : ""}`}
                onClick={handleSave}
                aria-label={saved ? "Unsave article" : "Save article"}
                aria-pressed={saved}
            >
                {!isLoggedIn && (
                    <span className="news-card__tooltip">Sign in to save articles</span>
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