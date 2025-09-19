import "./main.css"

function Main() {
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
            </div>
                   </main>
        
    );
}

export default Main;