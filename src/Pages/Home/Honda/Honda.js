import React from 'react';
import {useQuery} from '@tanstack/react-query'
import HondaComponent from '../HondaComponent/HondaComponent';
const Honda = () => {
    const {data:categories=[]} = useQuery({
   
        queryKey:['categories3'],
        queryFn:()=>fetch(`http://localhost:5000/categories3`)
        .then(res=>res.json())
        
     })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 px-20'>
               
        {
            categories.map(result=><HondaComponent
            key={result._id}
            result={result}
            
            ></HondaComponent>)
        }
        </div>
    );
};

export default Honda;