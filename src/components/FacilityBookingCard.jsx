'use client'

import { bookFacility } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { Check } from "lucide-react";


const FacilityBookingCard = ({ facility }) => {
    const { data: session, } = authClient.useSession()
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromData = new FormData(e.currentTarget);
        const bookingData = Object.fromEntries(fromData.entries())
        bookingData.total_price = facility.price_per_hour * bookingData.hours;
        bookingData.facility_id = facility._id;
        bookingData.facility_name = facility.name;
        bookingData.facility_image = facility.image;
        bookingData.email = session?.user?.email;
        bookingData.userId = session?.user?.id;
        bookingData.name = session?.user?.name;
        console.log(bookingData);
        const data = await bookFacility(bookingData)
    }
    return (
        <div>
            <p className="text-center font-semibold text-xl text-sky-600">Book </p>
            <form className="space-y-5" onSubmit={onSubmit}>
                <TextField
                    name="bookingDate"
                    type="date"
                    isRequired>
                    <Label>Date</Label>
                    <Input type="date" className="rounded-2xl" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="time_slot">
                    <Label>Time Slots</Label>
                    <Input className={'dark:bg-[#5F5E5A]'} placeholder="e.g. 10:00 AM - 12:00 AM" />

                </TextField>
                <TextField
                    isRequired
                    name="hours"
                    defaultValue={1}
                    type="text">
                    <Label>Hours</Label>
                    <Input className={'dark:bg-[#5F5E5A]'} />

                </TextField>
                <Button size="lg" className={'w-full bg-sky-600 hover:bg-teal-600 text-white'} type="submit">

                    <Check />Book
                </Button>
            </form>
        </div>
    );
};

export default FacilityBookingCard;