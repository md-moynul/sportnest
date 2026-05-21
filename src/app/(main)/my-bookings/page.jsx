import BookingCard from "@/components/BookingCard";
import { getAllBookingsByUserId } from "@/lib/data";

const MyBookingPage = async() => {
    const myBookings =await getAllBookingsByUserId('6a056e101aebfdb8e57d3e5a')
    console.log(myBookings);
    
    return (
        <div className="container mx-auto py-5 md:py-10 lg:py-15 xl:py-20 space-y-5 p-5 md:p-0">
            <h2 className="text-2xl md:text-5xl  font-extrabold">My Booking</h2>
            <div className="space-y-5">
                {myBookings.map(booking => <BookingCard booking={booking} key={booking._id} />)}
            </div>
            

        </div>
    );
};

export default MyBookingPage;