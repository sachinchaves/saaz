import React from 'react';

import CarouselContainer from './CarouselContainer';
import CarouselThumb from './CarouselThumb';
import CarouselTitle from './CarouselTitle';
import CarouselArtist from './CarouselArtist';


const CarouselSlider = props => (

  <CarouselContainer>
    <CarouselThumb source={props.image} />
    <CarouselTitle>{props.title}</CarouselTitle>
    <CarouselArtist>{props.artist}</CarouselArtist>
  </CarouselContainer>  
  
);

export default CarouselSlider;