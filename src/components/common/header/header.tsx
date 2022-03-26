import React from 'react';
import cl from './header.module.css'
import logo from './../../../assets/Logo.png'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={cl.headerWrap}>
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
    );
};

export default Header;