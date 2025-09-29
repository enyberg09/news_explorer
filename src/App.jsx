
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import About from './components/About/about.jsx'
import Main from './components/Main/main.jsx'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'
import NewsCard from './components/NewsCard/NewsCard.jsx' 


function App() {
const testArticle = [
    {
        publishedAt: "2024-01-15",
        title: "Breaking: Major Tech Breakthrough",
        description: "Scientists discover revolutionary new technology",
        source: { name: "Tech News" }
    },
    {
        publishedAt: "2024-01-14", 
        title: "Climate Change Update",
        description: "New research shows promising environmental trends",
        source: { name: "Environmental Times" }
    },
    {
        publishedAt: "2024-01-13",
        title: "Sports Championship Results",
        description: "Local team wins major tournament in exciting finale",
        source: { name: "Sports Daily" }
    }
];

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Main />
      <section className="news-section"> 
      <div className="news-card-container"> 
        {testArticle.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
      <About />
      <Footer />
          </div>
    </BrowserRouter>
  );
}

export default App;
