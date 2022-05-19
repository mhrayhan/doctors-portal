import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <div className='lg:mx-32 mx-4'>
        <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;