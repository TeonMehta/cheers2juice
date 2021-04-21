import React from 'react';
import products from '../menu';
import { Col, Container, Image, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'

const ShopProduct = ({ item, addItem }) => {
    console.log(item)
    const { title, imageUrl, price, description, linkUrl, history, match } = item;
    return (
        <Container className='product-item'>
            <Image
                fluid
                src={imageUrl} alt=""
            />
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default withRouter(connect(null, mapDispatchToProps)(ShopProduct));
