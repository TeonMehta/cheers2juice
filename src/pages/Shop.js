import React, { Component } from 'react';
import './Shop.scss'
import products from '../menu'
import PRODUCT_DATA from '../redux/shop/shop.data'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShopProduct from "./ShopProduct";

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            PRODUCT_DATA
        }
    }
    render() {
        return (
            <Container fluid className='container'>
                <Row className="justify-content-md-center">
                    {PRODUCT_DATA.map((item) => (
                        <Col s={12} md={4} key={item.id} className=' product'>
                            <Link to={`/shop/${item.linkUrl}`}>
                                <ShopProduct
                                    key={item.id}
                                    linkUrl={item.linkUrl}
                                    item={item}
                                    className=''
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>

            </Container>
        );
    }
}

export default Shop;