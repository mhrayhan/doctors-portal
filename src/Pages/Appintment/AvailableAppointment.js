import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const  [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h4 className='text-xl font-bold text-center text-primary'>Available appointment on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;