import React from 'react';
import CarouselComponent from "../../common/carouselComponent/carouselComponent";
import offer from './../../../assets/images/banner.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpsCards from "../../common/cardsHelp/helpsCards";
import cl from './home.module.css';
import Endorphone from './../../../assets/images/photo11.jpg'
import deliveryGroup from './../../../assets/images/photo22.jpg'
import group from './../../../assets/images/photo33.jpg'
import country from './../../../assets/images/photo44.jpg'
import LastCard from "../../common/cardsLast/lastCard";
import {Link} from "react-router-dom";
import arrowBl from "./../../../assets/arrowBl.png";
import clientImg from "./../../../assets/clientImg.png";
import mIcon from "./../../../assets/mIcon.png";
import ReviewsCarousel from "../../common/reviewsCarousel/reviewsCarousel";
import {reviewsArr} from "../about/about";

export type helpCardItemType = {
    id: string
    icon: any
    title: string
    desc: string
    link: string
    color: string
}
export type lastCardItemType = {
    id: string
    img: any
    text: string
    title: string
    desc: string
}
export const listBanners = [
    {
        img: offer,
        title: 'Разработка IT и Digital решений с гарантией!',
        desk: 'Cтроим IT-экосистемы и помогаем, трансформировать B2B, B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/services'
    },
    {
        img: offer,
        title: 'решений с гарантией!',
        desk: 'Cтроим IT-экосистемы  B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/web'
    },
    {
        img: offer,
        title: 'Разработка IT и Digital',
        desk: 'помогаем трансформировать B2B, B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/about'
    },

]
const helpCards = [
    {
        id: 'w1',
        icon: <ShoppingCartOutlinedIcon style={{color: '#fdb1ae'}}/>,
        // icon: <ShoppingCartOutlinedIcon style={{color:'linear-gradient(241.89deg, #FF9A9E 9.73%, #FAD0C4 96.14%)'}}/>,
        title: 'Интернет магазины',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(241.89deg, #FF9A9E 9.73%, #FAD0C4 96.14%)'
    },
    {
        id: 'w2',
        icon: <ShoppingCartOutlinedIcon style={{color: '#a1bbfd'}}/>,
        title: 'Web решения',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: ' linear-gradient(252.6deg, #A1BBFD 47.36%, #C2E9FB 114.7%)'
    },
    {
        id: 'w3',
        icon: <ShoppingCartOutlinedIcon style={{color: '#98e1e4'}}/>,
        title: 'Mobile',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: ' linear-gradient(284deg, #8FD3F4 -0.38%, #A8FCC7 126.09%)'
    },
    {
        id: 'w4',
        icon: <ShoppingCartOutlinedIcon style={{color: '#fdaf8a'}}/>,
        title: 'Seo',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(259.1deg, #FDA085 17.96%, #FDE59C 125.02%)'
    },
    {
        id: 'w5',
        icon: <ShoppingCartOutlinedIcon style={{color: '#f88fb9'}}/>,
        title: 'SMM',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(247.09deg, #FC6F82 -12.78%, #F4B7FC 96.51%)'
    },
    {
        id: 'w6',
        icon: <ShoppingCartOutlinedIcon style={{color: '#d4aae0'}}/>,
        title: 'PPC',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(260.99deg, #A18CD1 -50.85%, #FBC2EB 106.31%)'
    },
]
export const lastCards = [
    {
        id: 'wl1',
        img: Endorphone,
        text: 'UX, UI, SOFTWARE',
        title: 'Endorphone',
        desc: 'Провели редизайн сайта, тем самым увеличили CR для интернет-магазина.',
    },
    {
        id: 'wl2',
        img: deliveryGroup,
        text: 'UX, UI, SOFTWARE',
        title: 'DELIVERY GROUP',
        desc: 'Приложение для B2B перевозок',
    },
    {
        id: 'wl2',
        img: group,
        text: 'UX, UI, SOFTWARE',
        title: 'GROUP',
        desc: 'Приложение для B2B перевозок',
    },
    {
        id: 'wl2',
        img: country,
        text: 'UX, UI, SOFTWARE',
        title: 'СК “Країна”',
        desc: 'Разработали корпоративный сайт с возможностью оформлять услуги в личном кабинетеs',
    },
]
const clientArr = [
    {
        id: 'kl1',
        img: clientImg
    },
    {
        id: 'kl2',
        img: clientImg
    },
    {
        id: 'kl3',
        img: clientImg
    },
    {
        id: 'kl4',
        img: clientImg
    },
    {
        id: 'kl5',
        img: clientImg
    },
    {
        id: 'kl6',
        img: clientImg
    },
]

type propsType={
    theme:boolean
}
const Home = ({theme,...props}:propsType) => {
    const clientItem = clientArr.map(i => <div key={i.id} className={cl.clientImg}><img src={i.img} alt="clientImg"/>
    </div>)
    return (
        <>
            <div className={cl.container}>
                <CarouselComponent banner={listBanners}/>
                <div className={cl.helpsBlock}>
                    <p className={cl.title}>Наши услуги</p>
                    <h2 className={`${!theme? cl.dark: cl.light}`}>КАК мы можем вам помочь</h2>
                    <div className={cl.helpCardsWrap}>
                        {helpCards.map(i => {
                            return <HelpsCards key={i.id} cardItem={i} theme={theme}/>
                        })}
                    </div>
                </div>
                <LastWorksSection theme={theme}/>
            </div>
            <ReviewsCarousel banner={reviewsArr} marginTop={'150px'} marginBottom={'150px'} theme={theme}/>
            <div className={cl.clientBlock}>
                <div className={cl.container}>
                    <p className={cl.title}>СЧАСТЛИВЫЕ КЛИЕНТЫ</p>
                    <h2 className={`${!theme? cl.dark: cl.light}`}>Наши клиенты</h2>
                    <div className={cl.clientArr}>{clientItem}</div>
                </div>
            </div>
            <BottomBlock theme={theme}/>
        </>
    );
};

export default Home;

export const LastWorksSection = ({theme}:propsType) => {
    return (
        <div className={cl.lastWorks}>
            <div className={cl.textBlockLastW}>
                <p className={cl.title}>2000+ УСПЕШНЫХ ПРОЕКТОВ В IT</p>
                <h2 className={`${!theme? cl.dark: cl.light}`}>Последние проекты</h2>
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
    )
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
