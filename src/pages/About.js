import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const About = ({ about }) => {
    return (
        <div className={'about-container'}>
            <div className='about-inner'>
                <div className="about-image-wrapper">
                    <div className="about-image">
                        <Container fluid>
                            <Row>
                                <Col>
                                    {/* <Image
                                            src="/juice-fruit.jpg"
                                            width={1780}
                                            height={810}
                                            priority
                                        /> */}
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </div>
                <Row>
                    <Col xs={1} md={3}></Col>
                    <Col xs={12} md={6}>
                        <div className="spacer"> &nbsp;</div>
                        <Container className="about-row ">
                            <h2>Our Story</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi,
                            commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos
                                    impedit iusto officia quasi quis recusandae.</p>
                            <br /><br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi,
                                commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos
                                impedit iusto officia quasi quis recusandae.
                                </p>
                            <br /><br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi,
                                commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos
                                impedit iusto officia quasi quis recusandae.
                                </p>
                            <br /><br />
                        </Container>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>


            </div>
        </div>
    );
};

export default About;