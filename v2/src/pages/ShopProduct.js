import React from 'react';
import products from '../menu';
import { Col, Container, Image, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'

const twoDecimals = (number) => parseFloat(number).toFixed(2)
const ShopProduct = ({ item, addItem }) => {
    const { title, imageUrl, price, description, linkUrl, history, match } = item;
    return (
        <Container className='product-item'>
            <Row>
                <Col xs={12} md={6}>
                    <Image
                        fluid
                        src={imageUrl} alt="" onClick={() => history.push(`${match.url}/${linkUrl}`)} />
                </Col>
                <Col xs={6} md={4}>
                    <h3>{title}</h3>
                    <p>${twoDecimals(price)}</p>
                    <p>{description}</p>
                    <button onClick={() => addItem(item)}>Add to cart</button>
                </Col>
            </Row>
        </Container>
    );
};


//export default withRouter(ShopProduct);
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(withRouter(ShopProduct));

// const ShopProduct = (props, { item, addItem }) => {
//     const name = props.match.params.productId;
//     const juice = products.filter(product => product.linkUrl === name)[0];

//     return (
//     );
// };