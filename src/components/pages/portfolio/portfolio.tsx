import React, {useState} from 'react';
import imagePortfolio from './../../../assets/portfolio.jpg'
import cl from "./portfolio.module.css";
import LastCard from "../../common/cardsLast/lastCard";
import {Link} from "react-router-dom";
import {BottomBlock, lastCards} from "../home/home";
import Offer from "../../common/offer/offer";

type filterType= 'Все категории'|'WEB разработка'|'Системы и сервисы'|'Разработка приложений'|'Разработка ПО'|'Реклама'

const Portfolio = () => {
    const [active,setActive]=useState('Все категории')
    const changeActive = (name:string) => {
        setActive(name)
    }

    return (
        <div className={cl.container}>
            <Offer img={imagePortfolio} title={'Портфолио'} text={'Простые решения для сложных проблем'} linkPath={'/dddddd'}/>
            <div className={cl.selectedWorks}>
                <ul className={cl.filteredBlock}>
                    <li className={`${cl.filterI} ${active==='Все категории' && cl.active}`} onClick={()=>{changeActive('Все категории')}}>Все категории</li>
                    <li className={`${cl.filterI} ${active==='WEB разработка' && cl.active}`} onClick={()=>{changeActive('WEB разработка')}}>WEB разработка</li>
                    <li className={`${cl.filterI} ${active==='Разработка приложений' && cl.active}`} onClick={()=>{changeActive('Разработка приложений')}}>Разработка приложений</li>
                    <li className={`${cl.filterI} ${active==='Системы и сервисы' && cl.active}`} onClick={()=>{changeActive('Системы и сервисы')}}>Системы и сервисы</li>
                    <li className={`${cl.filterI} ${active==='Разработка ПО' && cl.active}`} onClick={()=>{changeActive('Разработка ПО')}}>Разработка ПО</li>
                    <li className={`${cl.filterI} ${active==='Реклама' && cl.active}`} onClick={()=>{changeActive('Реклама')}}>Реклама</li>
                </ul>
                <div className={cl.cardWrap}>
                    {lastCards.map(i => {
                        return <LastCard key={i.id} cardItem={i}/>
                    })}
                </div>
                <Link to='/works' className={cl.worksMore}>
                    Все проекты
                </Link>
            </div>
            <BottomBlock/>
        </div>

    );
};

export default Portfolio;

