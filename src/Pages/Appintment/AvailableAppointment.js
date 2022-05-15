import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date, setDate}) => {
    return (
        <div>
            <h4 className='text-xl font-bold text-center text-primary'>Available appointment on: {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointment;