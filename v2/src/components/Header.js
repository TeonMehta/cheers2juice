import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { auth } from '../firebase/utils'
import './Header.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import CardIcon from '../components/CardIcon';
import CardDropdown from './CardDropdown'

const Header = ({ currentUser, hidden }) => {
    return (
        <>
            <header className="container">
                <div className="inner">
                    <div className="top left"></div>
                    <div className="top center">
                        <div className="auth">
                        </div>
                        <nav>
                            <Link to="/">
                                <div className="branding">CHEERS 2 JUICE</div>
                            </Link>
                            <div className="nav-inner">
                                <Link className='navlink' to='/about'>ABOUT</Link>
                                <Link className='navlink' to='/shop'>SHOP</Link>
                                <Link className='navlink' to='/contact'>CONTACT</Link>
                                <Link className='navlink' to='/follow'>FOLLOW</Link>
                                {currentUser ? (
                                    <div className='option' onClick={() => auth.signOut()}>
                                        SIGN OUT
                                    </div>
                                ) : (
                                    <Link className='option' to='/signin'>
                                        SIGN IN
                                    </Link>
                                )}
                                <CardIcon />
                            </div>
                            {hidden ? null : <CardDropdown />}
                        </nav>
                    </div>
                    <div className="top right">
                        <a className="cart">
                            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                        </a>
                    </div>
                </div>
            </header>
        </>

    );
};


const links = [
    {
        "page": 'About Us',
        "url": '/about-us'
    },
    {
        "page": 'Shop',
        "url": '/shop'
    },
    {
        "page": 'Contact',
        "url": '/contact'
    },
    {
        "page": 'Follow',
        "url": 'https://www.instagram.com/cheers2juicemtl/'
    }

];

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);
