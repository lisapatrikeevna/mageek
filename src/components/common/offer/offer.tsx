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
    return (
        <div className={`${cl.offer} `}>
            <div className={cl.offerBg}>
                <img src={props.img} alt="imagePortfolio"/>
            </div>
            <div className={cl.offerText}>
                <h3>{props.title}</h3>
                <p className={cl.desk}>{props.text && props.text}</p>
                <Link to='/dddddd' className={cl.link}>
                    <p>обсудить проект</p>
                </Link>
            </div>
        </div>
    );
};

export default Offer;