import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))


  if (isLoading) {
    return <p>Loading...............</p>
  }

  const imgStorageKey = '672dd631e4fc9143a0dd10989ac9ff49';

  const onSubmit = async data => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img
          }
          // send data to database
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                Swal.fire(
                  'Success!',
                  `Doctor added Successfully!`,
                  'success'
                )
              } else {
                Swal.fire(
                  'Error!',
                  `Failed to added Doctor!`,
                  'error'
                )
              }
            })
        }
        console.log('imgbb', result);
      })
  }
  return (
    <div className='w-1/3 max-w-xs'>
      <h2 className='text-2xl font-semibold text-center text-orange-500'>Add a Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: 'Name is Required'
              }
            })} />

          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: 'Email is Required'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
              }
            })} />

          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select {...register("speciality")} class="select select-bordered w-full max-w-xs">
            {
              services.map(service => <option
                key={service._id}
                value={service.name}
              >{service.name}</option>)
            }
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file"
            className="input input-bordered py-[6px] w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: 'Image is Required'
              }
            })} />

          <label className="label">
            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
          </label>
        </div>


        <input className='btn w-full max-w-xs my-4 btn-outline btn-info' type="submit" value='Add Doctor' />
      </form>
    </div>
  );
};

export default AddDoctor;