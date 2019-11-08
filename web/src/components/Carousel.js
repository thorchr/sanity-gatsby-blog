import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
  <Carousel autoPlay>
    <div>
      <img src='luftbilde.jpg' />
      
    </div>
    <div>
      <img src='IMG_3618.jpg' />
     
    </div>
    <div>
      <img src='IMG_3610.jpg' />
    </div>
    <div>
      <img src='IMG_3622.jpg' />
    </div>
    <div>
      <img src='IMG_3624.jpg' />
    </div>
    
  </Carousel>
);