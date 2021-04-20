import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import './Checkout.scss'

const Checkout = ({ cartItems }) => {
    const total = cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity * cartItem.price, 0)
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Checkout);