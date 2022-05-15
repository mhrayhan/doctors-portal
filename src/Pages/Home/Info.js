import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    // bg={"bg-gradient-to-r from-secondary to-primary"}
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            <InfoCard title='Opening Hour' bg='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard title='Visit Out Location' bg='bg-accent' img={marker}></InfoCard>
            <InfoCard title='Contact Us Now' bg='bg-gradient-to-r from-secondary to-primary'  img={phone}></InfoCard>
        </div>
    );
};

export default Info;