import React from 'react';
import {useQuery} from '@tanstack/react-query'
import NissanComponent from '../NissanComponent/NissanComponent';
const Nissan = () => {
    const {data:categories=[]} = useQuery({
   
        queryKey:['categories2'],
        queryFn:()=>fetch(`http://localhost:5000/categories2`)
        .then(res=>res.json())
        
     })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 px-20'>
               
        {
            categories.map(result=><NissanComponent
            key={result._id}
            result={result}
            
            ></NissanComponent>)
        }
        </div>
    );
};

export default Nissan;