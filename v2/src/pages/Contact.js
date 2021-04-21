import React, { useRef, useState } from 'react';
import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";

const Contact = (props) => {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });
    const form = useRef(null);

    const handleFirstNameValueChange = (event) => {
        setValues((values) => ({
            ...values,
            firstName: event.target.value
        })
        )
    }
    const handleLastNameValueChange = (event) => {
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        })
        )
    }
    const handleEmailValueChange = (event) => {
        setValues((values) => ({
            ...values,
            email: event.target.value
        })
        )
    }
    const handleSubjectValueChange = (event) => {
        setValues((values) => ({
            ...values,
            subject: event.target.value,
        })
        )
    }
    const handleMessageValueChange = (event) => {
        setValues((values) => ({
            ...values,
            message: event.target.value
        })
        )
    }

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const data = new FormData(form.current)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
            if (validated) {
                setSubmitted(true);

                fetch('http://localhost:1337/contacts', {
                    method: 'POST',
                    body: data,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    console.log(response)
                    return response.json()
                }).catch(err => alert(err))

            }
        }
        console.log(values)
    }

    return (
        <div>
            {/* <Head>
                <title>Cheers 2 Juice | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <div className="spacer"> &nbsp;</div>
            <Row className="justify-content-md-center">
                <Col className='left'></Col>
                <Col xs={10} md={8}>
                    <div className="form-container">
                        <h2>CONTACT</h2>
                        <p>Get in touch with us.</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*<Form.Label>Name *</Form.Label>*/}
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustomFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        value={values.firstName}
                                        onChange={handleFirstNameValueChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustomLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        value={values.lastName}
                                        onChange={handleLastNameValueChange}

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <FormGroup controlId="validationCustomEmail">
                                <FormLabel>Email Address *</FormLabel>
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    value={values.email}
                                    onChange={handleEmailValueChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </FormGroup>


                            <Form.Group controlId="">
                                <Form.Label>Subject *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    value={values.subject}
                                    onChange={handleSubjectValueChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a subject.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="">
                                <Form.Label>Message *</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Message"
                                    required
                                    value={values.message}
                                    onChange={handleMessageValueChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please deliver your message.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="button-wrapper">
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                        {submitted && <div class='success-message'>Success! Thank you for registering</div>}
                    </div>
                </Col>
                <Col className='right'></Col>
            </Row >
        </div >
    );
};

export default Contact;
