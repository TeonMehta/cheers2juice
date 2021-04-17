import React, { Component } from 'react';
import './Shop.scss'
import Product from '../components/product';
import products from '../menu'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products
        }
    }
    componentDidMount() {
        console.log(products)

    }

    render() {
        return (
            <Container fluid className='container'>
                <Row className="justify-content-md-center">
                    {products.map(({ id, ...otherProductProps }) => (
                        <Col s={12} md={4} key={id} className=' product'>
                            {/* <Link href={`/shop/${linkUrl}`}> */}
                            < Product
                                key={id}
                                {...otherProductProps}
                            />
                            {/* </Link> */}
                        </Col>
                    ))}
                </Row>

            </Container>
        );
    }
}

export default Shop;