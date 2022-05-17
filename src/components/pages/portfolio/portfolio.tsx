import React, {useState} from 'react';
import imagePortfolio from './../../../assets/portfolio.jpg'
import cl from "./portfolio.module.css";
import LastCard from "../../common/cardsLast/lastCard";
import {Link} from "react-router-dom";
// import {lastCards} from "../home/home";
import Offer from "../../common/offer/offer";
import {BottomBlock} from "../../common/BottomBlock/BottomBlock";
import Endorphone from "../../../assets/images/photo11.jpg";
import deliveryGroup from "../../../assets/images/photo22.jpg";
import group from "../../../assets/images/photo33.jpg";
import country from "../../../assets/images/photo44.jpg";


export const lastCards = [
    {
        id: 'wl1',
        img: Endorphone,
        text: 'UX, UI, SOFTWARE',
        title: 'Endorphone 1',
        desc: 'Провели редизайн сайта, тем самым увеличили CR для интернет-магазина.',
        filter: 'WEB разработка'
    },
    {
        id: 'wl1.0',
        img: Endorphone,
        text: 'UX, UI, SOFTWARE',
        title: 'Endorphone 2',
        desc: 'Системы и сервисы',
        filter: 'Системы и сервисы'
    },
    {
        id: 'wl1.1',
        img: Endorphone,
        text: 'UX, UI, SOFTWARE',
        title: 'Endorphone',
        desc: 'Провели редизайн сайта, тем самым увеличили CR для интернет-магазина.',
        filter: 'Разработка приложений'
    },
    {
        id: 'wl2',
        img: deliveryGroup,
        text: 'UX, UI, SOFTWARE',
        title: 'DELIVERY GROUP 1',
        desc: 'Приложение для B2B перевозок',
        filter: 'WEB разработка'
    },
    {
        id: 'wl2.0',
        img: deliveryGroup,
        text: 'UX, UI, SOFTWARE',
        title: 'DELIVERY GROUP',
        desc: 'Реклама + Приложение для B2B перевозок',
        filter: 'Реклама'
    },
    {
        id: 'wl2.1',
        img: deliveryGroup,
        text: 'UX, UI, SOFTWARE',
        title: 'DELIVERY GROUP',
        desc: 'Разработка ПО',
        filter: 'Разработка ПО'
    },
    {
        id: 'wl3',
        img: group,
        text: 'UX, UI, SOFTWARE',
        title: 'GROUP 1',
        desc: 'Приложение для B2B перевозок',
        filter: 'WEB разработка'
    },
    {
        id: 'wl2',
        img: country,
        text: 'UX, UI, SOFTWARE',
        title: 'СК “Країна 1”',
        desc: 'Разработали корпоративный сайт с возможностью оформлять услуги в личном кабинетеs',
        filter: 'WEB разработка'
    },
    {
        id: 'wl3.1',
        img: country,
        text: 'UX, UI, SOFTWARE',
        title: 'СК “2”',
        desc: 'Разработали корпоративный сайт с возможностью оформлять услуги в личном кабинетеs',
        filter: 'Системы и сервисы'
    },
]
type filterType =
    'Все категории'
    | 'WEB разработка'
    | 'Системы и сервисы'
    | 'Разработка приложений'
    | 'Разработка ПО'
    | 'Реклама'
type propsType = {
    theme: boolean
}

const Portfolio = ({theme}: propsType) => {
    const [active, setActive] = useState<filterType>('Все категории')
    const [filteredList, setFilteredList] = useState(lastCards)
    const changeActive = (name: filterType) => {
        setActive(name)
        let newList =[]
        if (name === 'Все категории') {
            newList = lastCards
        } else {
           newList= lastCards.filter(c => {
               c.filter === name &&  console.log('c.filter', c.filter);
                return c.filter === name
            })
        }
        console.log('name', name,"filteredList",filteredList,'newList', newList);
        setFilteredList(newList)
    }


    return (
        <>
            <div className={cl.container}>
                <Offer img={imagePortfolio} title={'Портфолио'} text={'Простые решения для сложных проблем'}
                       linkPath={'/dddddd'}/>
                <div className={`${cl.selectedWorks} ${theme && cl.selectedWorksDark}`}>
                    <ul className={cl.filteredBlock}>
                        <li className={`${cl.filterI} ${active === 'Все категории' && cl.active}`} onClick={() => {
                            changeActive('Все категории')
                        }}>Все категории
                        </li>
                        <li className={`${cl.filterI} ${active === 'WEB разработка' && cl.active}`} onClick={() => {
                            changeActive('WEB разработка')
                        }}>WEB разработка
                        </li>
                        <li className={`${cl.filterI} ${active === 'Разработка приложений' && cl.active}`}
                            onClick={() => {
                                changeActive('Разработка приложений')
                            }}>Разработка приложений
                        </li>
                        <li className={`${cl.filterI} ${active === 'Системы и сервисы' && cl.active}`} onClick={() => {
                            changeActive('Системы и сервисы')
                        }}>Системы и сервисы
                        </li>
                        <li className={`${cl.filterI} ${active === 'Разработка ПО' && cl.active}`} onClick={() => {
                            changeActive('Разработка ПО')
                        }}>Разработка ПО
                        </li>
                        <li className={`${cl.filterI} ${active === 'Реклама' && cl.active}`} onClick={() => {
                            changeActive('Реклама')
                        }}>Реклама
                        </li>
                    </ul>
                    <div className={cl.cardWrap}>
                        {filteredList.map(i => {
                            return <LastCard key={i.id} cardItem={i}/>
                        })}
                    </div>
                    <Link to='/services' className={cl.worksMore}>
                        Все проекты
                    </Link>
                </div>

            </div>
            <BottomBlock theme={theme}/>
        </>
    );
};

export default Portfolio;

