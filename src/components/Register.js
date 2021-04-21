import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../firebase/utils';
import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <Col xs={12} md={8}>
                <div className='sign-up'>
                    <h2 className='title'>I do not have a account</h2>
                    <span>Sign up with your email and password</span>
                    <Form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormGroup controlId="validationCustomName">
                            <FormLabel>Name *</FormLabel>
                            <Form.Control
                                type='text'
                                name='displayName'
                                value={displayName}
                                onChange={this.handleChange}
                                label='Display Name'
                                required
                            />
                        </FormGroup>
                        <FormGroup controlId="validationCustomEmail">
                            <FormLabel>Email Address *</FormLabel>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                                label='Email'
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                                </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup controlId="validationCustomPassword">
                            <FormLabel>Password *</FormLabel>
                            <Form.Control
                                type='password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                                label='Password'
                                required
                            />
                        </FormGroup>
                        <FormGroup controlId="validationCustomConfirmPassword">
                            <FormLabel>Confirm Password *</FormLabel>
                            <Form.Control
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={this.handleChange}
                                label='Confirm Password'
                                required
                            />
                        </FormGroup>
                        <button type='submit'>SIGN UP</button>
                    </Form>
                </div >
            </Col>
        );
    }
}

export default Register;