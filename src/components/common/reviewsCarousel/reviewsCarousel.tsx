import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";
import './carouselReviev.css'


type itemBannerType = {
    img: any
    // img:object
    desk: string
    title: string
    btnText: string
    btnLink: string
}
type propsType = {
    banner: Array<itemBannerType>
}

const ReviewsCarousel = (props: propsType) => {
    const itemBanner = props.banner.map(i => <div className="itemWork">
        <img src={i.img} alt='img'/>
        <div className="legendReview">
            <h3 className='titleOffer'>{i.title}</h3>
            <p className='deskOffer'>{i.desk}</p>
            <Link to={i.btnLink} className='linkOffer'><p>{i.btnText}</p></Link>
        </div>
    </div>)

    return (
        <Carousel className='reviews'
                  showStatus={false}
                  showThumbs={false}
                  centerSlidePercentage={3}

                  infiniteLoop
                  centerMode
                  useKeyboardArrows
        >
            {itemBanner}
        </Carousel>
    );
};

export default ReviewsCarousel;