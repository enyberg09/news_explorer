import React from "react";
import SavedNewsHeader from "./SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/footer.jsx";

import "./SavedNews.css"

function SavedNews({ currentUser, savedArticles, onDeleteArticle}) {
    const keywords = savedArticles
        .map(article => article.keyword || "misc")
        .filter(Boolean);
    const uniqueKeywords = [...new Set(keywords)]; 

    return (
        <section className="saved-news">
            <SavedNewsHeader
                articlesCount={savedArticles.length}
                currentUser={currentUser}
                keywords={uniqueKeywords}
                />
             {savedArticles.length > 0 ? (
                <>
                <div className="saved-news__keywords">
                    {uniqueKeywords.map((keyword, index) => (
                        <span key={keyword + index} className="keyword">
                            {keyword}
                        </span>
                    ))}
                </div>

                <NewsCardList 
                    articles={savedArticles}
                    isLoggedIn={true}
                    onSaveArticle={() => {}}
                    onDeleteArticle={onDeleteArticle}
                    isSavedNewsPage={true}
                    savedArticles={savedArticles}
                />
                </>
                    ) : (
                        <div className="saved-news__no-articles">
                            <h2 className="saved-news__no-articles-title">
                                No saved articles yet
                            </h2>
                        </div>
                    )}
                    <Footer />
        </section>
    );
}

export default SavedNews;