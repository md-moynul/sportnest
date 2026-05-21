import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { getAllBookingsByUserId } from "@/lib/data";
import { headers } from "next/headers";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const myBookings = await getAllBookingsByUserId(session?.user?.id)
    // console.log(myBookings);

    return (
        <div className="container mx-auto py-5 md:py-10 lg:py-15 xl:py-20 space-y-10 p-5 md:p-0">
            <h2 className="text-2xl md:text-5xl  font-extrabold">My Booking</h2>
            <div className="space-y-5">
                {myBookings.map(booking => <BookingCard booking={booking} key={booking._id} />)}
            </div>


        </div>
    );
};

export default MyBookingPage;