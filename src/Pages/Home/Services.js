import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: '',
      img: fluoride,
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description: '',
      img: cavity,
    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      description: '',
      img: whitening,
    },
  ]
  return (
    <div className='my-32'>
      <div className='text-center text-xl  uppercase'>
        <h4 className='text-primary font-bold'>Our Services</h4>
        <h2 className='text-accent text-4xl mt-2'>Services We Provide</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;