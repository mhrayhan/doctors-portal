import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div style={{background: `url(${appointment})`}} className={`flex items-center my-32 text-white`}>
            <div className='lg:flex-1 '>
                <img className='hidden lg:block' style={{marginTop: -200}} src={doctor} alt="" />
            </div>
            <div className='lg:flex-1 p-4'>
                <h2 className='text-xl font-bold text-secondary'>Appointment</h2>
                <h3 className='text-4xl font-bold my-6'>Make an appointment Today</h3>
                <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;