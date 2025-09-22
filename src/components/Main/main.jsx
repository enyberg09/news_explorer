import "./main.css"
import { useState } from 'react';
import NewsCardList from './NewsCardList/NewsCardList';


function Main() {
    const [newsArticles, setNewsArticles] = useState([]);
    return (
        <main className="main">
            <img 
                src="../../src/images/main-page-pic.svg" 
                alt="Main page pic" 
                className="main__image"
                />
                <div className="main__content">
            <h1 className="main__title">What's going on in the world?</h1>
            <p className="main__subtitle">Find the latest news on any topic and save them in your personal account.</p>
             <form className="main__search-form">
                <input
                    className="main__search-input"
                    type="text"
                    placeholder="Enter topic"
                    />
                    <button className="main__search-button" type="submit">
                        Search
                    </button>
            </form>
           <NewsCardList newsArticles={newsArticles} />
            </div>
                   </main>
        
    );
}

export default Main;