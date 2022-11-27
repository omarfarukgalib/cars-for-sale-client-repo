import React from 'react';

const HondaComponent = ({result}) => {
    const {name_3,img_3,postedTime_3,location_3,usingTime_3,seller_3,resalePrice_3,originalPrice_3} = result
    return (
        <div className="card card-compact text-center w-96 bg-base-100 shadow-xl ">
        <figure><img src={img_3} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{name_3}</h2>
          <p className='font-semibold'>Posting Time: 10 am  {postedTime_3} </p>
          <p className='font-semibold'>Meet Location: {location_3}</p>
          <p className='font-semibold'>Using Time: {usingTime_3}</p>
          <p className='font-semibold'>Seller Name: {seller_3}</p>
          <p className='font-semibold'>Resale Price: ${resalePrice_3}</p>
          <p className='font-semibold'>Original Price: ${originalPrice_3}</p>
          <div className="card-actions justify-center">
          <label htmlFor="booking-modal" className="btn btn-warning font-semibold w-full">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default HondaComponent;