import React from "react";
import SkillList from "../components/Coding/SkillList"
import ProjectAcordion from "../components/Coding/ProjectAcordion"

function Home() {
    return (
        <div className="home">
            <div>
                <img className="home-photo" src="portrait1.jpg" alt=""/>
                <h1 className="title">Irene Manning</h1>
            </div>
            
            <div className="resume-obj">
                <small>
                Driven by a passion for front-end development and design, I am a self-taught software engineer seeking opportunities to apply my skills and unleash creativity. I combine technical expertise with an artistic flair to craft visually engaging and functional applications.
                </small>    
            </div>
            <SkillList />
            <ProjectAcordion />
        </div>
    )
}

export default Home