import cl from "./DeckWithImgSection.module.css";
import React from "react";

type propsTypeDeskWithImgSection = {
    title: string
    titleMain: string
    desk: string
    img: any
    textAfter?: string
    iconF?: any
    iconS?: any
    iconT?: any
    theme?: boolean
}
export const DeckWithImgSection = ({title, titleMain, desk, img, ...props}: propsTypeDeskWithImgSection) => {
    return (
        <div className={cl.ourServices}>
            <div className={cl.textBlock}>
                <p className={cl.title}>{title}</p>
                <h2 className={`${cl.titleMain}  ${props.theme && cl.titleMainDark}`}>{titleMain}</h2>
                <p className={cl.desk}>{desk}</p>
                {props.textAfter &&
                <p className={`${cl.textAfter}  ${props.theme && cl.textAfterDark}`}>{props.textAfter}</p>}
                <div className={cl.imageList}>
                    {props.iconF && <img src={props.iconF} alt="htmlImj"/>}
                    {props.iconS && <img src={props.iconS} alt="htmlImj"/>}
                    {props.iconT && <img src={props.iconT} alt="htmlImj"/>}
                </div>
            </div>
            <div className={cl.imageBlock}>
                <img src={img} alt="webImg"/>
            </div>
        </div>
    )
}
