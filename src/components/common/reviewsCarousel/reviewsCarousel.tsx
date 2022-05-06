import React from 'react';
import './carouselReviev.css'
import {Rating} from "@mui/material";
import {Carousel} from 'antd'
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import style from "../../pages/common.module.css";

type itemBannerType = {
    img: any
    rating: number
    desk: string
    userName: string
    text: string
    btnText?: string
    btnLink?: string
}
type propsType = {
    banner: Array<itemBannerType>
    marginTop:string
    marginBottom:string
    theme:boolean
}

const ReviewsCarousel = ({theme,...props}: propsType) => {
    const [value, setValue] = React.useState<number | null>(2);
    const itemBanner = props.banner.map(i => {
        // setValue()
        return <div className={ `itemReview ${!theme && 'dark'}` } key={i.img}>
            <div className="legendReviews">
                {/*<Rating name="read-only" value={value} readOnly />*/}
                <Rating name="read-only" value={i.rating} readOnly/>
                <p className='deskReview'>{i.desk}</p>
                <div className='userReview'>
                    <img src={i.img} alt='img'/>
                    <div className='usersDataReview'>
                        <p className='usersNameReview'>{i.userName}</p>
                        <p className='usersTextReview'>{i.text}</p>
                    </div>
                </div>
            </div>
        </div>
    })
    let countSlider=3
    if(window.innerWidth < 993){
        countSlider=2
    }
    if (window.innerWidth < 768){
        countSlider=1
    }
    const reviewSectionStyle={
        marginTop:props.marginTop,
        marginBottom:props.marginBottom,
        background:theme?  '#f8f8f8' :'#353043'
    }

    return (
        <div className='reviewSection' style={reviewSectionStyle}>
            <div className={style.container}>
                <p className='reviewTitle'>отзывы</p>
                <h2 className='reviewText' style={{color:theme? '#0E153A':'#fff'}}>Что о нас говорят</h2>
                <Carousel className='reviews' centerMode={true} arrows
                          prevArrow={<LeftOutlined/>} nextArrow={<RightOutlined/>}
                          slidesToShow={ countSlider}
                          centerPadding='10px'
                    // responsive={1}
                >
                    {itemBanner}
                </Carousel>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
