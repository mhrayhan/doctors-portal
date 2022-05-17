import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        setTreatment(null)
        console.log(slot, name, email, phone);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-secondary font-bold text-xl mb-8">{name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center pb-8'>
                    <input type="text"value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                    <select name='slot' class="select select-bordered w-full max-w-xs">
                    {
                        slots.map(slot => <option value={slot}>{slot}</option>)
                    }
                    </select>
                    <input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                    <input  type="submit" value="Submit" class="btn btn-primary text-white w-full max-w-xs" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;