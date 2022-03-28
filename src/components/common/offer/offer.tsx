import React from 'react';
import cl from "./offer.module.css";
import {Link} from "react-router-dom";

type propsType ={
    img:any
    title:string
    text?:string
    linkPath:string
}
const Offer = (props:propsType) => {
    const windowWidth = window.innerWidth;
    let bgImg =props.img
    const bgWidth = {
        background: windowWidth<993.9 ?"url("+bgImg+")no-repeat center left/cover": 'transparent',
        borderRadius :'15px'
    }

    return (
        <div className={`${cl.offer} `}>
            <div className={cl.offerBg} style={bgWidth}>
            {/*<div className={cl.offerBg} style={{background:'url('+{bgImg}+')no-repeat center'}}>*/}
                <div className={cl.offerText}>
                    <h3>{props.title}</h3>
                    <p className={cl.desk}>{props.text && props.text}</p>
                    <Link to='/dddddd' className={cl.link}>
                        <p>обсудить проект</p>
                    </Link>
                </div>
                <img src={bgImg} alt="imagePortfolio"/>
            </div>

        </div>
    );
};

export default Offer;