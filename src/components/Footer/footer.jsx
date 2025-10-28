import "./footer.css"
import GithubIcon from '../../images/github.svg'
import LinkedInIcon from '../../images/LinkedIn.svg'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
        
        <nav className="footer__nav">
          <a href="#" className="footer__link">Home</a>
          <a 
          href="https://tripleten.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="TripleTen"
          className="footer__link">TripleTen</a>
        </nav>
        
        <div className="footer__social">
          <a 
            href="https://github.com/enyberg09" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="footer__social-link"
          >
            <img src={GithubIcon} alt="GitHub" width="24" height="24" />
          </a>
          <a 
            href="https://www.linkedin.com/in/elissanyberg/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="footer__social-link"
>
  <img src={LinkedInIcon} alt="LinkedIn" width="24" height="24" />
</a> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;