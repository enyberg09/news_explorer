
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ articles = [], onSaveArticle }) {
    return (
        <div className="news-card-list">
            <div className="news-card-list__container">
            {articles.map((article) => (
                <NewsCard 
                    key={article.id || article.url || index} 
                    article={article}
                    onSave={onSaveArticle} />
            ))}
        </div>
        </div>
    );
}

export default NewsCardList;
