import React, {useState} from 'react';
import cl from './footer.module.css'
import logo from './../../../assets/Logo.png'
import {Link} from 'react-router-dom';
import inst from './../../../assets/instagram.png'
import instBl from './../../../assets/instagramBlack.png'
import tg from './../../../assets/tg.png'
import tgBl from './../../../assets/tgBlack.png'
import linked from './../../../assets/Linkedin.png'
import linkedBl from './../../../assets/linkedinBlack.png'
import MenuIcon from "@mui/icons-material/Menu";
import logoDark from "../../../assets/LogoDark.png";

type propsType = {
    theme: boolean
}

const Footer = ({theme}: propsType) => {
    let [collaps, setCollaps] = useState(false)
    let onStyle = {}
    if (window.innerWidth < 451) {
        onStyle = {
            visibility: collaps ? "visible" : "collapse"
        }
    }
    const onClickHandler = () => {
        setCollaps(!collaps)
    }
    // console.log('clTheme',theme && cl.footerWrapDarks);
    return (
        <>
            <div className={`${cl.footerWrap} theme && ${cl.footerWrapDark}`} onClick={onClickHandler}>
                <div className={cl.logo}>
                    <img src={theme ? logo : logoDark} alt="logo"/>
                </div>
                <div className={cl.nav} style={onStyle}>
                    <Link to='/'>home</Link>
                    <Link to='/services'>services</Link>
                    <Link to='/works'>works</Link>
                    <Link to='/about'>about</Link>
                    <Link to='/contacts'>contacts</Link>
                </div>
                <div className={cl.right}>
                    <img src={theme ? inst : instBl} alt="inst"/>
                    <img src={theme ? tg : tgBl} alt="tg"/>
                    <img src={theme ? linked : linkedBl} alt="linked"/>
                    {window.innerWidth < 451 && <MenuIcon className={cl.menuBtn} onClick={onClickHandler}/>}
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
