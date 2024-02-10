import React, { useState } from "react"
import {Form, Button} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaMedium } from "react-icons/fa6"
import OpenInNewTab from "../utility/OpenInNewTab"

function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="connect">
                <h1>Connect with Irene</h1>
                <Button 
                variant="dark" 
                onClick={()=>OpenInNewTab("https://github.com/irenemanning")}
                >
                GitHub <FaGithub />
                </Button>
                <Button 
                variant="dark" 
                onClick={()=>OpenInNewTab("http://www.linkedin.com/in/Irene-manning")}
                >
                Linked In <FaLinkedin />
                </Button>
                <Button 
                variant="dark" 
                onClick={()=>OpenInNewTab("https://medium.com/@irenemanning")}
                >
                Medium <FaMedium />
                </Button>
            </div>

            <Form onSubmit={handleSubmit}>
                <h1>Contact</h1>
                <Form.Group className="mb-3" controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ContactTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="dark">Submit</Button>{''}
            </Form>
        </div>
    )
}

export default Contact