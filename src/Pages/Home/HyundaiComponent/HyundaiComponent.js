import React from 'react';

const HyundaiComponent = ({result}) => {
        const {name_1,img_1,postingTime_1,location_1,usingTime_1,seller_1,resalePrice_1,originalPrice_1} = result
    return (
        <div className="card card-compact text-center w-96 bg-base-100 shadow-xl ">
        <figure><img src={img_1} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{name_1}</h2>
          <p className='font-semibold'>Posting Time: 10 am  {postingTime_1} </p>
          <p className='font-semibold'>Meet Location: {location_1}</p>
          <p className='font-semibold'>Using Time: {usingTime_1}</p>
          <p className='font-semibold'>Seller Name: {seller_1}</p>
          <p className='font-semibold'>Resale Price: ${resalePrice_1}</p>
          <p className='font-semibold'>Original Price: ${originalPrice_1}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-warning font-semibold w-full">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default HyundaiComponent;