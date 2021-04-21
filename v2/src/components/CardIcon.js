import React from 'react';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import './CardIcon.scss'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../redux/cart/cart.actions'
import { Link } from "react-router-dom";

const CardIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <Link to='/checkout'>
            <div className="cart-icon">
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>{itemCount}</span>
            </div>
        </Link >
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);