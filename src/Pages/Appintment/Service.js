import React from 'react';

const Service = ({service}) => {
const {name, slots} = service;
    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{
                slots.length > 0 ? 
                <span>{slots[0]}</span> : 
                <span className='text-red-500 text-sm'>No Slot Available</span>
                }</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Service;