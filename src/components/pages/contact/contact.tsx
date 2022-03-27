import React from 'react';
import cl from './contact.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/contactBg.jpg";
import Offer from "../../common/offer/offer";

const Contact = () => {
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'Контакты'} text={'Если есть что-то, о чем вы хотите поговорить, пожалуйста, не стесняйтесь связаться с нами.'} linkPath={'/jjj'}/>
        </div>
    );
};

export default Contact;