
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ articles = [], onSaveArticle }) {
    return (
        <div className="news-card-list">
            {articles.map((article) => (
                <NewsCard 
                key={article.id} 
                article={article}
                onSave={onSaveArticle} />
            ))}
        </div>
    );
}

export default NewsCardList;
