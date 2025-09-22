import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ newsArticles }) {
    return (
        <div className="news-card-list">
            {newsArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
            ))}
        </div>
    );
}

export default NewsCardList;