import React from "react";
import styles from "./styles.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends React.Component {
    render() {
      const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 470,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,

      };
      return (
        <div className={styles.Showcase}>  
          <Slider {...settings} className = {styles.Slider}>
            <div className = {styles.image}>
              <img src='https://marketplace.canva.com/EADanyYvbuM/1/0/800w/canva-clothing-rack-boutique-fashion-facebook-cover-JJELZ3VAfxE.jpg' alt=''/>
            </div>
            <div className = {styles.image}>
              <img src='https://altitude-blog.com/wp-content/uploads/2019/07/Altitude-Blog-Kids-Children-Fashion-Clothing-Cover-Bird-Children-Co.jpg' alt='' />
            </div>
            <div className = {styles.image}>
              <img src='https://storage.googleapis.com/cdn-parisfashionshops/v2/front/homepage/slideshow/spring-summer.en.gif?fbclid=IwAR1tVUtrdasAtJeYkS61aZJ7Mc7zr_m2Vy5CIGdRHzRr2UGwryVbMXr84os' alt='' />
            </div>
            <div className = {styles.image}>
              <img src='https://hub.awin.com/wp-content/uploads/2017/03/spring25r_homepage_sale-banner_D.jpg?fbclid=IwAR0MYzhWWzFD_RqqVjxEOpqd9-B2r_7wewUSGcnwk1kwLIWkUodlDTEZHIQ' alt='' />
            </div>          
          </Slider>
        </div>
      );
    }
  }

  /* <div>
              <img src='https://nulltx.com/wp-content/uploads/2017/02/shutterstock_361395185.jpg'/>
            </div>*/