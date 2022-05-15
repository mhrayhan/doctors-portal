import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            city: 'California',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id:2,
            name: 'Winson Herry',
            city: 'California',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id:3,
            name: 'Winson Herry',
            city: 'California',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                <h2 className='text-3xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img src={quote} className='w-24 lg:w-48'  alt="" />
            </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 lg:m-12 mt-8 lg:mt-28'>
                {
                    reviews.map(review => 
                    <div className='shadow-md p-4 rounded-2xl' key={review._id}>
                        <p>{review.review}</p>
                        <div className='flex items-center mt-8'>
                            <div className='mr-4'>
                                <img style={{padding: '2px'}} width={64}className='border-4 border-primary rounded-full' src={review.img} alt="" />
                            </div>
                            <div>
                                <h5 className='text-l font-bold'>{review.name}</h5>
                                <h5>{review.city}</h5>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Testimonial;