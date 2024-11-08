import React from 'react';
import bannerImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='absolute'>

            <img src={bannerImage} alt="" />
            
        </div>
    );
};

export default Banner;