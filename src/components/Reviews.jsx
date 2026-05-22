"use client"; // Required for Next.js App Router if you add interactive HeroUI elements later

import React from "react";
import { Card, Avatar, Chip } from "@heroui/react";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Tahmid Hasan",
            role: "Regular Striker",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
            rating: 5,
            facilityName: "Elite Turf & Futsal Ground",
            reviewText: "Absolutely love using SportNest. Booking a slot for our weekend futsal match takes less than a minute now. No more calling the venue owners repeatedly!",
            date: "May 20, 2026"
        },
        {
            id: 2,
            name: "Arif Rahman",
            role: "Cricket Club Captain",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 4,
            facilityName: "National Cricket Academy Nets",
            reviewText: "The real-time facility availability tracker is incredibly accurate. We managed to secure a prime practice slot during peak Friday hours without any overlapping issues.",
            date: "May 18, 2026"
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            role: "Badminton Enthusiast",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            rating: 5,
            facilityName: "Woodfloor Badminton Court Arena",
            reviewText: "Super clean user interface. The 'My Bookings' section makes it incredibly easy to track active reservations and view digital receipts on the go.",
            date: "May 14, 2026"
        },
        // {
        //     id: 4,
        //     name: "Tanvir Ahmed",
        //     role: "Tournament Organizer",
        //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        //     rating: 5,
        //     facilityName: "Indoor Basketball Complex",
        //     reviewText: "Managing multiple court bookings simultaneously used to be a massive headache. SportNest streamlines everything beautifully. 10/10 UX!",
        //     date: "May 09, 2026"
        // },
        // {
        //     id: 5,
        //     name: "Sajid Islam",
        //     role: "Local League Coach",
        //     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
        //     rating: 4,
        //     facilityName: "Olympic Size Swimming Pool",
        //     reviewText: "Very reliable platform. The option to see exact pricing details and amenities before confirming the booking helps our swimming club plan efficiently.",
        //     date: "May 03, 2026"
        // }
    ];

    return (
        <section  className="py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        What Our Players Are Saying
                    </h2>
                    <p className="mt-3 text-default-500">
                        Join hundreds of athletes who book their venues effortlessly.
                    </p>
                </div>

                {/* HeroUI Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <Card key={review.id} className="w-full shadow-sm border border-default-200">

                            {/* User Info & Rating */}
                            <div className="flex justify-between items-start gap-3 p-5">
                                <div className="flex gap-3">

                                    <Avatar>
                                        <Avatar.Image alt={review.name} src={review.image} loading="eager" className="" />
                                        <Avatar.Fallback>{review.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-1 items-start justify-center">
                                        <h4 className="text-small font-semibold leading-none text-foreground">
                                            {review.name}
                                        </h4>
                                        <h5 className="text-small tracking-tight text-default-500">
                                            {review.role}
                                        </h5>
                                    </div>
                                </div>
                                <div className="flex text-warning text-small">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                                    ))}
                                </div>
                            </div>



                            {/* Review Content */}
                            <div className="p-5 flex flex-col gap-4" >
                                <div>
                                    <Chip size="sm" variant="flat" color="primary" className="text-primary-600 bg-primary-50 dark:bg-primary-900/30">
                                        {review.facilityName}
                                    </Chip>
                                </div>
                                <p className="text-default-600 text-sm italic leading-relaxed h-18">
                                    {review.reviewText}
                                </p>
                            </div>

                            {/* Date Footer */}
                            <div className="px-5 pb-5 pt-0 justify-end text-tiny text-default-400">
                                {review.date}
                            </div>

                        </Card>
                    ))}
                </div>

            </div >
        </section >
    );
};

export default Reviews;