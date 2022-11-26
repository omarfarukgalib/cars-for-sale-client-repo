import React from 'react';

const NissanComponent = ({result}) => {
    const {name,img,postedTime,location,usingTime,seller,resalePrice,originalPrice} = result
    return (
        <div className="card card-compact text-center w-96 bg-base-100 shadow-xl ">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className='font-semibold'>Posting Time: 10 am  {postedTime} </p>
          <p className='font-semibold'>Meet Location: {location}</p>
          <p className='font-semibold'>Using Time: {usingTime}</p>
          <p className='font-semibold'>Seller Name: {seller}</p>
          <p className='font-semibold'>Resale Price: ${resalePrice}</p>
          <p className='font-semibold'>Original Price: ${originalPrice}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-warning font-semibold w-full">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default NissanComponent;