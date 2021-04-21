import React from 'react';
import './CardDropdown.scss'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart.selector';

const CardDropdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(
                    cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))}
        </div>
        <button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CardDropdown));