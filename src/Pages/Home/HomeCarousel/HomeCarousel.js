import React from 'react';

import carousel1 from '../../../images/23alt-hero-768x461.jpg'
import carousel2 from '../../../images/jgc-hero-768x461.jpg'
import carousel3 from '../../../images/23kicks-hero-768x461.jpg'
const HomeCarousel = () => {
    return (
      <div>
        <div>
            <p className='text-sky-500 font-bold text-2xl mt-10'>
            Trade for top dollar! Share your trade-in with Dealers today!
            </p>
        </div>
        <div className="mt-10 rounded-lg mx-auto carousel w-3/4 h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={carousel1} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={carousel2} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={carousel3} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
      </div>
    );
};

export default HomeCarousel;