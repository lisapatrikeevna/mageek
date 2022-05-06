import React from 'react';
import {helpCardItemType} from "../../pages/home/home";
import cl from './helpsCards.module.css';
import arrow from './../../../assets/arrow.png'

type propsType = {
    cardItem: helpCardItemType
    theme:boolean
}
const HelpsCards = ({cardItem,theme}: propsType) => {
    return (
        <div className={cl.helpsCardsItem}>
            <div className={`${cl.helpsCardsItemInner} ${!theme? cl.dark: cl.light}`}>
                <span className={cl.icon}> {cardItem.icon}</span>
                {/*{cardItem.icon? <span>{cardItem.icon}</span> : ''}*/}
                <h3>{cardItem.title}</h3>
                <p>{cardItem.desc}</p>
            </div>
            <div className={cl.link} style={{background: cardItem.color}}>
               <p className={cl.linkPath}>{cardItem.link}</p>
                <div className={cl.arrow}><img src={arrow} alt="arrow"/></div>
            </div>
        </div>
    );
};

export default HelpsCards;
