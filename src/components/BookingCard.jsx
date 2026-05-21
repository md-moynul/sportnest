import { Calendar, Eye, MapPin, TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import React from 'react';
import CancelBooking from './CancelBooking';
import Link from 'next/link';
import Image from 'next/image';
const BookingCard = ({ booking }) => {
    // console.log(booking);

    const { _id, facility_image, facility_name, total_price, bookingDate, time_slot, hours } = booking;
    const date = new Date(bookingDate).toLocaleDateString()

    return (
        <Card className='p-0 overflow-hidden max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4'>


                <div className='relative w-full h-60 md:h-auto md:col-span-3 md:aspect-square'>
                    <Image
                        src={facility_image}
                        alt={facility_name}
                        fill
                        className="object-center rounded mx-auto" />
                </div>
                <div className='p-5 md:col-span-5 flex items-center '>
                    <div className='space-y-2'>


                        <p className='text-4xl font-semibold text-sky-600'>{facility_name}</p>
                        <p className="flex gap-3 items-center"><Calendar /><span>Booking Date : {date}</span></p>
                        <p>Time : {time_slot}</p>
                        <p>Hour :{hours}</p>
                        <p className='text-xl font-semibold '>Total Price: <span className='text-sky-600'>${total_price}</span></p>
                    </div>
                </div>
                <div className='md:col-span-4 flex items-center justify-end p-5 '>
                    <CancelBooking booking={booking} />
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;