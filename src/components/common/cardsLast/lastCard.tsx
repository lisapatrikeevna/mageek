import React from 'react';
import cl from './lastCard.module.css';
import arrow from './../../../assets/arrow.png';
import {lastCardItemType} from "../../pages/home/home";

type propsType = {
    cardItem: lastCardItemType
}
const LastCard = ({cardItem}: propsType) => {
    return (
        <div className={cl.lastCardsItem}>
            <span className={cl.bg}> <img src={cardItem.img} alt="img"/></span>
            <div className={cl.lastsCardsItemInner}>
                {/*{cardItem.icon? <span>{cardItem.icon}</span> : ''}*/}
                <h3>{cardItem.title}</h3>
                <p>{cardItem.desc}</p>
            </div>
        </div>
    );
};

export default LastCard;