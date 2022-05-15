import React from 'react';

const Service = ({service}) => {
    const {name, img} = service;
    return (
        <div className="card max-w-lg shadow-xl">
          <figure className="lg:px-10 lg:pt-10 ">
            <img src={img} alt="Card_Image" className="rounded-xl py-4" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
      </div>
    );
};

export default Service;