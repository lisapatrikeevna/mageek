import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";
import './carouselReviev.css'
import StarIcon from '@mui/icons-material/Star';


type itemBannerType = {
    img: any
    rating:number
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
}

const ReviewsCarousel = (props: propsType) => {
    const itemBanner = props.banner.map(i => <div className="itemReview">
        <div className="legendReviews">
            <div className="ratingReview">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <p className='deskOffer'>{i.desk}</p>
            {/*<Link to={i.btnLink} className='linkOffer'><p>{i.btnText}</p></Link>*/}
            <div className='userReview'>
                <img src={i.img} alt='img'/>
                <div className='usersDataReview'>
                    <p className='usersNameReview'>{i.userName}</p>
                    <p className='usersTextReview'>{i.text}</p>
                </div>
            </div>
        </div>
    </div>)

    return (
        <Carousel className='reviews'
                  showStatus={false}
                  showThumbs={false}
                  centerSlidePercentage={4}
                  infiniteLoop
                  centerMode
                  useKeyboardArrows
        >
            {itemBanner}
        </Carousel>
    );
};

export default ReviewsCarousel;