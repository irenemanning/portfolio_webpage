import React from "react";
import {Form, Button} from 'react-bootstrap';


function Contact() {
    return (
        <div>
            <h1>Contact Irene</h1>
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