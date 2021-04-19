import React from 'react';
import './CardDropdown.scss'
import { connect } from 'react-redux'
import CartItem from './CartItem'

const CardDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(
                cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
        </div>
        <button>GO TO CHECKOUT</button>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CardDropdown);