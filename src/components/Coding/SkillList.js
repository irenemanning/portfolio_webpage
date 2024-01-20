import React from "react"
import { ListGroup } from "react-bootstrap"

function SkillList() {
    return (
        <div className="skill-list">
            <ListGroup key={'md'} horizontal={'md'} className="my-2">
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Ruby on Rails</ListGroup.Item>
            <ListGroup.Item>HTML5</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>Figma</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SkillList