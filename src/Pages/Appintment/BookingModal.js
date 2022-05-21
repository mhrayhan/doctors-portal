import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;
  const formattedDate = format(date, 'PP');
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;
    // console.log(slot, name, email, phone);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone
    }

    fetch('https://young-stream-80146.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        refetch();
        setTreatment(null)
        if (data.success) {
          Swal.fire(
            'Welcome to our clinic',
            `Appointment is set, ${formattedDate} at ${slot}`,
            'success'
          )
        }
        else {
          Swal.fire(
            'Please try another day',
            `Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`,
            'warning'
          )
        }
      })


  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-secondary font-bold text-xl mb-8">{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center pb-8'>
            <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
            <select name='slot' className="select select-bordered w-full max-w-xs">
              {
                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <input name='name' readOnly type="text" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
            <input name='email' readOnly type="text" value={user.email || ''} className="input input-bordered w-full max-w-xs" />
            <input name='phone' type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-primary text-white w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;