import React from "react"
import { Accordion, Button } from "react-bootstrap"

function ProjectAcordion() {
    return (
        <div className="project-accordion">
            <Accordion flush  className="w-100">
                <h1>PROJECTS BY IRENE</h1>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Gossip Grl</Accordion.Header>
                    <Accordion.Body>
                        <h6>
                        A text-centric social media platform where users share the latest gossip through text-only posts.
                        </h6>
                        <Button variant="success" href="https://gossipgrl.onrender.com/">DEMO</Button>
                        <Button variant="outline-success">GitHub</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Wine Reviewer</Accordion.Header>
                    <Accordion.Body>
                        <h6>
                        A collaborative Ruby on Rails application for sharing and reviewing diverse wines, allowing users to contribute by adding new entries and leaving reviews.
                        </h6>
                        <Button variant="success" href="https://wine-reviewer.onrender.com/">DEMO</Button>
                        <Button variant="outline-success">GitHub</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Cat Meme Creator</Accordion.Header>
                    <Accordion.Body>
                        <h6>
                        A whimsical web app enabling users to create, view, edit, delete, and like cat memes, with dynamic content management via a JSON database.
                        </h6>
                        <Button variant="success" href="https://cat-memes-by-irene.netlify.app/">DEMO</Button>
                        <Button variant="outline-success">GitHub</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Poke Collector</Accordion.Header>
                    <Accordion.Body>
                        <h6>
                        A JavaScript web app using a Pokemon API for browsing and collecting, with enhanced user experience through event listeners and animations.
                        </h6>
                    <Button variant="success" href="https://poke-liker.netlify.app/">DEMO</Button>
                    <Button variant="outline-success">GitHub</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    )
}

export default ProjectAcordion