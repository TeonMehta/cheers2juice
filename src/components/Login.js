import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../firebase/utils';
import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }
    onChange = (e) => {
        const { value, name } = e.target;
        // Dynamically setting our property value
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Col xs={12} md={8}>
                <div>
                    <h2>Login</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="validationCustomEmail">
                            <FormLabel>Email Address *</FormLabel>
                            <Form.Control
                                className='input'
                                value={this.state.email}
                                onChange={this.onChange}
                                name="email"
                                type="email"
                                placeholder="Email address..."
                            />
                        </FormGroup>
                        <FormGroup controlId="validationCustomPassword">
                            <FormLabel>Password *</FormLabel>
                            <Form.Control
                                className='input'
                                value={this.state.password}
                                onChange={this.onChange}
                                name="password"
                                type="password"
                                placeholder="Password..."
                            />
                        </FormGroup>
                        <button style={{ margin: '10px' }} className='button' type="submit">Log In</button>
                        <button className='button' onClick={signInWithGoogle} type="submit">Sign In With Google</button>

                    </Form>

                </div>
            </Col >
        );
    }
}

export default Login;