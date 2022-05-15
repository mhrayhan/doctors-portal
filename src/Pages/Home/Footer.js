import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section className='pt-8 pb-16 mb-6' style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover'
            }}>
            <div className='grid lg:grid-cols-3 lg:gap-20 gap-5 lg:text-center w-[90%] mx-auto'>
                <div className=''>
                    <h4 className='text-l font-bold text-accent'>SERVICES</h4>
                    <p>Emergency Checkup</p>
                    <p>Monthly Checkup</p>
                    <p>Weekly Checkup</p>
                    <p>Deep Checkup</p>
                </div>
                <div className=''>
                    <h4 className='text-l font-bold text-accent'>ORAL HEALTH</h4>
                    <p>Fluoride Treatment</p>
                    <p>Cavity Filling</p>
                    <p>Teath Whitening</p>
                </div>
                <div>
                    <h4 className='text-l font-bold text-accent'>OUR ADDRESS</h4>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
                <p className='text-center mt-20'>Copyright 2022 All Rights Reserved</p>
        </section>
    );
};

export default Footer;