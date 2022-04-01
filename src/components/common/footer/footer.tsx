import React, {useState} from 'react';
import cl from './footer.module.css'
import logo from './../../../assets/Logo.png'
import {Link} from 'react-router-dom';
import inst from './../../../assets/instagram.png'
import tg from './../../../assets/tg.png'
import linked from './../../../assets/Linkedin.png'
import MenuIcon from "@mui/icons-material/Menu";


const Footer = () => {
    let[collaps,setCollaps]=useState(false)
    let onStyle = {}
    if(window.innerWidth < 451){
        onStyle = {
            visibility:  collaps? "visible": "collapse"
        }
    }
    const onClickHandler=()=>{
        setCollaps(!collaps)
    }
    return (
        <>
        <div className={cl.footerWrap}>
            <div className={cl.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={cl.nav} style={onStyle}>
                <Link to='/'>home</Link>
                <Link to='/services'>services</Link>
                <Link to='/works'>works</Link>
                <Link to='/about'>about</Link>
                <Link to='/contacts'>contacts</Link>
            </div>
            <div className={cl.right}>
                <img src={inst} alt="inst"/>
                <img src={tg} alt="tg"/>
                <img src={linked} alt="linked"/>
                {window.innerWidth < 451 && <MenuIcon className={cl.menuBtn} onClick={onClickHandler}/> }
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