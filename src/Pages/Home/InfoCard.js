import React from 'react';

const InfoCard = ({bg, img, title}) => {
    return (
        <div className={`card lg:card-side bg shadow-xl text-white px-3 ${bg}`}>
        <figure><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;