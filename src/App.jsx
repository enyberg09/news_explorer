
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react"; 
import About from './components/About/about.jsx'
import Main from './components/Main/main.jsx'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'
import NewsCard from './components/NewsCard/NewsCard.jsx'
import LoginModal from "./components/LoginModal/LoginModal.jsx";      
import RegisterModal from "./components/RegisterModal/RegisterModal.jsx";


function App() {

  const [isLoginOpen, setIsLoginOpen] =useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function handleLogin(data) {
    console.log("Logging in:", data);
    setIsLoginOpen(false);
  }

  function handleRegister(data) {
    console.log("Registering:", data);
    setIsRegisterOpen(false);
  }


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
      <Header 
        onSignInClick={() => setIsLoginOpen(true)}
        onSignUpClick={() => setIsRegisterOpen(true)}
      />
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

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        switchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        switchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
        />
        </div>
    </BrowserRouter>
  );
}

export default App;
