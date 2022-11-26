import React from 'react';
import title_hyundai from '../../../images/title_pic_hyundai.jpg'
import title_nissan from '../../../images/title_pic_nissan.jpg'
import title_honda from '../../../images/title_pic_honda.jpg'
import { Link } from 'react-router-dom';
import Hyundai from '../Hyundai/Hyundai';


const CarsCatagories = ({id}) => {
  
    return (
       <div>
        <div className='mt-10'>
            <hr className='font-semibold h-4 w-1/2 mx-auto bg-black'/>
            <p className='mt-10 text-3xl font-bold text-sky-500'>CARS FOR SALE BY Catagories</p>
            <br />
            <p className='text-xl font-semibold'>Start your search by choosing one of the most popular makes like Chevrolet, Ford or Honda. Shop millions. Find yours!

</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 gap-16 mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={title_hyundai} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold card-title">
            Hyundai
            <div className="badge badge-secondary">Used Car</div>
          </h2>
          <Link to='/hyundai'><button className='text-xl font-semibold btn btn-warning'>Details Catagories</button></Link>
          
        </div>
      </div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={title_nissan} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold card-title">
            Nissan
            <div className="badge badge-secondary">Used Car</div>
          </h2>
          <Link to="/nissan" ><button className='text-xl font-semibold btn btn-warning'>Details Catagories</button></Link>
          
        </div>
      </div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={title_honda} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold card-title">
           Honda
            <div className="badge badge-secondary">Used Car</div>
          </h2>
          <Link to="/honda"><button className='text-xl font-semibold btn btn-warning'>Details Catagories</button></Link>
          
        </div>
      </div>
        </div>
      
       </div>
    );
};

export default CarsCatagories;