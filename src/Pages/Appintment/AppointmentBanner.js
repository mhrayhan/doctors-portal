import React, {  } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero min-h-screen bg-no-repeat bg-center bg-[url('/src/assets/images/bg.png')]">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div>
        <img src={chair} className="lg:max-w-sm rounded-lg ml-16 shadow-2xl" alt='' />
   </div>
    <div>
        <DayPicker 
        mode="single"
        selected={date}
        onSelect={setDate}
        />
        <p>You have selected: {format(date, 'PP')}</p>
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;