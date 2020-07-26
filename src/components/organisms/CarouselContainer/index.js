import React from 'react';
import './styles.scss';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CarouselContainer({ items }) {

  const settings = {
    className: "example",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="carouselContainer">
      {items.length === 0 ? (
        <h1>loading...</h1>
      ) : (
          <Slider {...settings}>
            {items.map(item => (
              <img key={item.id} className="carouselContainer-image" src={item.download_url} alt={item.url} />
            ))}
          </Slider>
        )}
    </div>
  )
}