import React from 'react';
import { connect } from 'react-redux';
import './Checkout.scss'
import { Col, Container, Image, Row } from "react-bootstrap";
import {
    addItem,
    removeItem
} from '../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../redux/shop/shop.selectors';
const twoDecimals = (number) => parseFloat(number).toFixed(2)
const SpecificProduct = ({ collections, match, addItem }) => {
    const result = collections.filter(product => product.linkUrl === match.params.productId)[0]
    return (
        <Container className='product-item'>
            <Row>
                <Col xs={12} md={6}>
                    <Image
                        fluid
                        src={result.imageUrl} alt="" />
                </Col>
                <Col xs={6} md={4}>
                    <h3>{result.title}</h3>
                    <p>${twoDecimals(result.price)}</p>
                    <p>{result.description}</p>
                    <button onClick={() => addItem(result)}>Add to cart</button>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});


export default connect(mapStateToProps, mapDispatchToProps)(SpecificProduct);