import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider';
import {useQuery} from '@tanstack/react-query'

const BookingModal = () => {
    const { data: carsShow1 = [] } = useQuery({

        queryKey: ['carsShow1'],
        queryFn: () => fetch(`http://localhost:5000/carsShow1`)
            .then(res => res.json())

    })
   
 
    const {user} = useContext(authContext)
    const handleSubmit = (event) =>{
        const form = event.target;
        const names = form.names.value;
        const email = form.email.value;
        const phone = form.phone.value;
    }
    return (
        <div>


            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                    {
                        carsShow1.map(show=><>{show.name}</>)
                    }
                    </h3>
                    
                    <p className="py-4">
                        {
                            carsShow1.map(show=><p className='text-left  bg-gray-100 rounded-md p-2'>Price: ${show.resalePrice}</p>)
                        }
                    </p>
                    <p className="py-4">
                        {
                            carsShow1.map(show=><p className='text-left  bg-gray-100 rounded-md p-2'>Location: {show.location}</p>)
                        }
                    </p>
                    <form onSubmit={handleSubmit}>
                    <input type="text" name="names" defaultValue={user?.displayName} disabled placeholder="Full Name" className="mt-1 input input-bordered w-full" />
                    <input type="email" name="email" defaultValue={user?.email} disabled placeholder="Email Address" className="mt-1 input input-bordered w-full" />
                    <input type="text" name="phone" placeholder="Phone Number" className="mt-1 input input-bordered w-full" />
                    <button className='mt-1 font-semibold btn btn-warning w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;