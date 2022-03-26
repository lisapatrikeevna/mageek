import React from 'react';
import cl from './footer.module.css'
import logo from './../../../assets/Logo.png'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className={cl.footerWrap}>
            <div className={cl.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={cl.nav}>
                <Link to='/'>home</Link>
                <Link to='/services'>services</Link>
                <Link to='/works'>works</Link>
                <Link to='/about'>about</Link>
                <Link to='/contacts'>contacts</Link>
            </div>
            <div className={cl.right}>

            </div>
        </div>
            <div className={cl.footerBottomWrap}>
                <p>
                    <span>© 2000-2021</span>
                    IT-компания Mageek Soft
                </p>
            </div>
        </>
    );
};

export default Footer;