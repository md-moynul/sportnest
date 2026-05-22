import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { getAllBookingsByUserId } from "@/lib/data";
import { Button, EmptyState } from "@heroui/react";
import { CalendarX, Icon, Search } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const myBookings = await getAllBookingsByUserId(session?.user?.id)
    if (myBookings.length === 0) {
        return (
            <div className="container mx-auto py-5 md:py-10 lg:py-15 xl:py-20 space-y-10 p-5 md:p-0">
                <h1 className="text-3xl font-bold mb-8">My Booking</h1>
                <div className="flex flex-col items-center justify-center py-20 border rounded-xl bg-white">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                        <CalendarX className="w-9 h-9 text-gray-400" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">No bookings yet</h2>
                    <p className="text-gray-500 text-center max-w-xs mb-6">
                        You haven't booked any facility yet. Browse available facilities and make your first booking.
                    </p>
                    <Link href="/all-facility" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                        <Search className="w-4 h-4" /> Browse Facilities
                    </Link>
                </div>
            </div>
        );
    }


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