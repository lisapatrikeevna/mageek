import cl from "./../../pages/common.module.css";
import mIcon from "../../../assets/mIcon.png";
import React from "react";

type propsType={
    theme:boolean
}

export const BottomBlock = ({theme}:propsType) => {
    return (
        <div className={`${cl.letsDiscuss} theme && ${cl.letsDiscussDark}`}>
            <div className={cl.container}>
                <div className={cl.leftBlockDiscuss}>
                    <h5>ПЕРЕСТАНЬТЕ ЗАКАЗЫВАТЬ ПРОСТО САЙТЫ</h5>
                    <h3>ДАВАЙТЕ обсудим ВАШ БИЗНЕС!</h3>
                    <button className={`${cl.leftBlockLinkBtn} ${theme? cl.leftBlockLinkBtnLight: cl.leftBlockLinkBtnDark}`}>Связаться с нами</button>
                    <p className={cl.leftBlockDiscussDesk}>Звоните, пишите,<br/>
                        пообщаемся, договоримся!</p>
                    <p className={cl.leftBlockDiscussLinkT}>office+2536076@wezom.com.ua</p>
                </div>
                <div className={cl.rightBlockDiscuss}>
                    <div className={cl.mIconWrap}>
                        <img src={mIcon} alt="mIcon"/>
                    </div>
                    <div className={cl.rightBlockDiscussText}>
                        <h3>ПЕРЕСТАНЬТЕ ЗАКАЗЫВАТЬ ПРОСТО САЙТЫ</h3>
                        <p>
                            Мы верим, что только благодаря вовлеченности и
                            совместной работе над проектом можно достичь больших
                            целей и получить крутые результаты, поэтому под каждый
                            проект формируем Dream Team. В процессе работы мы с
                            головой погружаемся в бизнес клиента, ищем и принимаем
                            только те решения, которые релевантны задачам и бизнес-целям.
                        </p>
                        <p style={{marginTop: '15px'}}>
                            За 2021 год мы приобрели крутой опыт и лучше остальных знаем,
                            на чем фокусироваться, чтобы выполнить проект в срок и
                            сэкономить бюджет клиента. Знаем, как не допустить фатальных
                            ошибок при создании сложных IT-решений. Каждый раз, перед
                            началом проекта, делаем аудит, чтобы определить маршрут и
                            инструменты для движения вперед.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
