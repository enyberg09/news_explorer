import "./about.css"

function About() {
    return (
        <div className="about"> 
            <div className="about__content">
              <img 
                    src="../src/images/profile-pic.jpg" 
                    alt="Elissa profile pic" 
                    className="about__image"
                />
        <div className="about__text-container">    
      <h1 className="about__title">About the author</h1>
      <p className="about__text">
        Hi, I’m Elissa — a web developer passionate about building clean, responsive, and user-friendly applications. 
        I specialize in frontend development with HTML, CSS, JavaScript, and React, and I also have experience with Node.js and APIs. 
        Through TripleTen’s Software Engineering program, I’ve built full-stack projects and learned to write clean, scalable code. 
        My goal is to help clients and teams bring their ideas to life with polished, reliable web solutions.
      </p>
        </div>
        </div>
        </div>
    );
}

export default About;