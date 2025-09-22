import { BrowserRouter } from 'react-router-dom';
import About from './components/About/about.jsx'
import Main from './components/Main/main.jsx'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Main />
      <About />
      <Footer />
          </div>
    </BrowserRouter>
  );
}

export default App;
