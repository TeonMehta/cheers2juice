import React, { Component } from 'react';
import './Shop.scss'
import Product from '../components/product';
import products from '../menu'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShopProduct from "./ShopProduct";


class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products
        }
    }
    render() {
        // const { products } = this.state;
        console.log('PRODUCTS', this.state)
        return (
            <Container fluid className='container'>
                <Row className="justify-content-md-center">
                    {products.map((item) => (
                        <Col s={12} md={4} key={item.id} className=' product'>
                            {/* <Link to={`/shop/${item.linkUrl}`}> */}
                            <ShopProduct
                                key={item.id}
                                linkUrl={item.linkUrl}
                                item={item}
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