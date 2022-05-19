import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Speacial from './Speacial';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <div className='lg:mx-32 mx-4'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Speacial></Speacial>
      </div>
      <div>
        <MakeAppointment></MakeAppointment>
      </div>
      <div className='lg:mx-32 mx-4'>
        <Testimonial></Testimonial>
      </div>
      <div>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;