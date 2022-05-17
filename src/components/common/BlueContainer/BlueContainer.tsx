import cl from "./BlueContainer.module.css";
import arrowForLink from "../../../assets/arrow.png";
import React from "react";

type blueBlockPropsType = {
    prevText: string
    title: string
}
export const BlueContainer = ({prevText, title}: blueBlockPropsType) => {

    return (
        <div className={cl.blueBlock}>
            <div className={cl.blueDeck}>
                <h6>{prevText}</h6>
                <h4>{title}</h4>
            </div>
            <div className={cl.arrowForLink}><img src={arrowForLink} alt="arrowForLink"/></div>
            <div className={cl.linkBtnWrap}>
                <button className={cl.linkBtn}>
                    <span>Обсудить проект</span>
                </button>
                <p className={cl.textAfterBtn}>Мы моментально ответим вам</p>
            </div>
        </div>
    )
}
