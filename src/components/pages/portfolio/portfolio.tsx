import React from 'react';
import imagePortfolio from './../../../assets/portfolio.jpg'
import cl from "../home/home.module.css";
import LastCard from "../../common/cardsLast/lastCard";
import {Link} from "react-router-dom";
import arrowBl from "../../../assets/arrowBl.png";
import {lastCards} from "../home/home";

const Portfolio = () => {
    return (
        <>
            <div>
                <img src={imagePortfolio} alt="imagePortfolio"/>
            </div>
            <div className={cl.lastWorks}>
                <div className={cl.textBlockLastW}>
                    <p className={cl.title}>2000+ УСПЕШНЫХ ПРОЕКТОВ В IT</p>
                    <h2>Последние проекты</h2>
                    <p className={cl.lastWorksDesk}>
                        За 21 год мы приобрели крутой опыт и лучше остальных знаем,
                        на чем фокусироваться, как не допустить фатальных ошибок и как
                        определить маршрут и инструменты для движения вперед
                    </p>
                </div>
                <div className={cl.cardWrap}>
                    {lastCards.map(i => {
                        return <LastCard key={i.id} cardItem={i}/>
                    })}
                </div>
                <Link to='/works' className={cl.worksLink}>
                    Все проекты
                    <span><img src={arrowBl} alt="arrowBl"/></span>
                </Link>
            </div>
        </>

    );
};

export default Portfolio;