import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="home-title">
                <img className="home-photo" src="portrait1.jpg" alt=""/>
                <div className="text-overlay">
                    <h1 className="title">Irene Manning</h1>
                </div>
            </div>
            
            <div className="resume-obj">
                <small>
                Driven by a passion for front-end development and design, I am a self-taught software engineer seeking opportunities to apply my skills and unleash creativity. I combine technical expertise with an artistic flair to craft visually engaging and functional applications.
                </small>    
            </div>
        </div>
    )
}

export default Home