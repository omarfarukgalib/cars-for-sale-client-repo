import React from 'react';
import { useQuery } from '@tanstack/react-query'
import HyundaiComponent from '../HyundaiComponent/HyundaiComponent';
import BookingModal from '../BookingModal/BookingModal';
const Hyundai = () => {


    const { data: categories = [] } = useQuery({

        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
            .then(res => res.json())

    })
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 px-20'>


                {
                    categories.map(result => <HyundaiComponent
                        key={result._id}
                        result={result}

                    ></HyundaiComponent>)
                }
            </div>
            <div>
                <BookingModal
                
                ></BookingModal>
            </div>
        </div>
    );
};

export default Hyundai;