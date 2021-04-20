import React from 'react';
import styles from './Footer.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const socials = [
    'https://mail.google.com/mail/u/0/#inbox'
]
const Footer = () => {
    return (
        <footer>
            <div className='inner'>
                <div className="footer-social">
                    <div className='brand'>CHEERS 2 JUICE </div>
                    <div className={styles.iconRow}>
                        <Link href={socials[0]}><a className={'email footer-icon ' + 'icon'}><FontAwesomeIcon icon={faEnvelope} /></a></Link>
                        <Link href={socials[0]}><a className={'instagram footer-icon ' + 'icon'}><FontAwesomeIcon icon={faInstagram} /></a></Link>
                        <Link href={socials[0]}><a className={'facebook footer-icon ' + 'icon'}><FontAwesomeIcon icon={faFacebookSquare} /></a></Link>
                    </div>
                </div>
                <div className={styles.links}>
                    <Link href="#"><a className='link'>Contact</a></Link>
                    <Link href="#"><a className='link'>FAQ</a></Link>
                    <Link href="#"><a className='link'>Blog</a></Link>
                </div>
                <div className={styles.copyright}>©2021 CHEERS 2 JUICE</div>
                <div className="footer-newsletter"></div>
            </div>
        </footer>
    );
};

export default Footer;
