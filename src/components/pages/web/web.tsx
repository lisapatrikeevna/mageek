import React from 'react';
import cl from './web.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/webBg.jpg";
import Offer from "../../common/offer/offer";

const Web = () => {
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'Создание интернет-магазина'} linkPath={'/jjj'}/>
        </div>
    );
};

export default Web;