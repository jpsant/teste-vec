import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';

import CarouselContainer from '../CarouselContainer';

export default function ApplicationContainer() {

  useEffect(() => {
    getCarouselImages();
  }, []);

  const getCarouselImages = async () => {
    axios.get('https://picsum.photos/v2/list')
    .then(response =>  carouselItemsHandler(response.data))
    .catch(() => getCarouselImages());
  }

  const [carouselItems, carouselItemsHandler] = useState([]);
  
  return (
    <div className="applicationContainer">
      <h1 className="applicationContainer-title">React-Carousel</h1>
      <CarouselContainer items={carouselItems} />
    </div>
  )
}