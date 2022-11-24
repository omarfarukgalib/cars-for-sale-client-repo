import React from 'react';
import CarsCatagories from '../CarsCatagories/CarsCatagories';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div>
            
            <HomeCarousel></HomeCarousel>
            <HomeSection></HomeSection>
            <CarsCatagories></CarsCatagories>
        </div>
    );
};

export default Home;