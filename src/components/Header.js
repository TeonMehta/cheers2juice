import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { auth } from '../firebase/utils'
import './Header.scss'
import { connect } from "react-redux";
import CardIcon from '../components/CardIcon';
import CardDropdown from './CardDropdown'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cart.selector'
import { selectCurrentUser } from '../redux/user/user.selector';
import { Col, Image, Container, Row, Figure } from "react-bootstrap";


const Header = ({ currentUser, hidden }) => {
    return (
        <>
            <Container fluid>

                <Row className="justify-content-md-center">
                    <nav>
                        <Link to="/">
                            <div className="branding">
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src="https://i.ibb.co/mG3RTn7/400-Pngdpi-Logo.png"
                                    />
                                    </Figure>
                                </div>
                        </Link>
                        <div className="nav-inner">
                            <Link className='navlink' to='/about'>ABOUT</Link>
                            <Link className='navlink' to='/shop'>SHOP</Link>
                            <Link className='navlink' to='/contact'>CONTACT</Link>
                            <Link className='navlink' to={{ pathname: "https://www.instagram.com/cheers2juicemtl/" }} target="_blank">FOLLOW</Link>
                            {currentUser ? (
                                <div className='navlink' onClick={() => auth.signOut()}>
                                    SIGN OUT
                                </div>
                            ) : (
                                <Link className='navlink' to='/signin'>
                                    SIGN IN
                                </Link>
                            )}

                        </div>
                        {hidden ? null : <CardDropdown />}
                    </nav>
                </Row>
                <Row className="justify-content-md-center justify-content-sm-center justify-content-center">
                    <CardIcon className='navlink' />
                </Row>
            </Container>
            {/* <header className="container">
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
                                    <div className='navlink' onClick={() => auth.signOut()}>
                                        SIGN OUT
                                    </div>
                                ) : (
                                    <Link className='navlink' to='/signin'>
                                        SIGN IN
                                    </Link>
                                )}
                                <CardIcon className='navlink' />
                            </div>
                            {hidden ? null : <CardDropdown />}
                        </nav>
                    </div>
                    <div className="top right">

                    </div>
                </div>
            </header> */}
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
