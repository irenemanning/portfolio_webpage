import React from "react"

import ProjectAcordion from "../components/Coding/ProjectAcordion"
import SkillList from "../components/Coding/SkillList"

function Coding() {
    return (
        <div className="coding-page">
            <SkillList />
            <ProjectAcordion />
        </div>
    )
}

export default Coding