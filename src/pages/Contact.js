import React from "react"
import {Form, Button} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import OpenInNewTab from "../utility/OpenInNewTab"

function Contact() {
    return (
        <div>
            <h1>Contact and Connect with Irene</h1>
            <Button variant="dark" onClick={()=>OpenInNewTab("https://github.com/irenemanning")}>GitHub <FaGithub /></Button>
            <Button variant="dark" onClick={()=>OpenInNewTab("http://www.linkedin.com/in/Irene-manning")}>Linked In <FaLinkedin /></Button>
            
            <Form>
                <Form.Group className="mb-3" controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ContactTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="dark">Submit</Button>{''}
            </Form>
        </div>
    )
}

export default Contact;