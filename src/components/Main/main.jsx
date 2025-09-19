import "./main.css"

function Main() {
    return (
        <main className="main">
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
        </main>
        
    );
}

export default Main;