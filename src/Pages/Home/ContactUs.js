import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className=' text-center mt-36 mb-8 lg:mb-20 lg:py-16 p-8'>
      <h4 className='text-xl text-secondary font-bold'>Contact Us</h4>
      <h2 className='text-3xl text-white my-4'>Stay connected with us</h2>
      <form className='flex flex-col lg:w-1/3 m-auto gap-y-4 mb-6'>
        <input type="text" placeholder="Email Address" className="input input-bordered w-full " />
        <input type="text" placeholder="Subject" className="input input-bordered w-full" />
        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
      </form>
      <PrimaryButton>Submit</PrimaryButton>
    </section>
  );
};

export default ContactUs;