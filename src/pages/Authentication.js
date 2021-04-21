import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { Container, Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
const Authentication = () => {
    return (
        <Container >
            <Row>
                <Col s={12} md={6}>
                    <Login />
                </Col>
                <Col s={12} md={6}>
                    <Register />
                </Col>
            </Row>
        </Container>
    );
};

export default Authentication;