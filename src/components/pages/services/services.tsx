import React from 'react';
import Offer from "../../common/offer/offer";
import imgBg from './../../../assets/servisesBg.jpg'

const Services = () => {
    return (
        <div>
            {/*services*/}
            <Offer img={imgBg} title={'Создаем IT & Digital решения с гарантией!'} linkPath={'/path'}/>
        </div>
    );
};

export default Services;