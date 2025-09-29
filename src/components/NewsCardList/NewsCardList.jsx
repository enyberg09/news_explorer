
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ newsArticles, onSaveArticle }) {
    return (
        <div className="news-card-list">
            {newsArticles.map((article) => (
                <NewsCard 
                key={article.id} 
                article={article}
                onSave={onSaveArticle} />
            ))}
        </div>
    );
}

export default NewsCardList;
