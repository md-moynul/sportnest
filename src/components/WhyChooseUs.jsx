"use client";

import React from "react";
import { Card } from "@heroui/react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "60-Second Bookings",
      description: "Secure your favorite turf or court instantly. No endless back-and-forth phone calls with venue managers."
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: "Real-Time Slots",
      description: "Our automated schedule tracker guarantees zero overlapping or double-bookings. What you see is exactly what's open."
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Verified Premium Venues",
      description: "Every facility listed features high-quality pictures, precise court dimensions, accurate pricing, and amenities."
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      title: "All-in-One Dashboard",
      description: "Manage active game schedules, track history, modify reservations, and pull up digital booking receipts on the go."
    }
  ];

  return (
    <section className=" py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-wider uppercase bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-full">
            Why SportNest?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-slate-900 dark:text-white tracking-tight">
            Built for players. Engineered for seamless game days.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-zinc-400 text-lg leading-relaxed">
            Finding a reliable space to practice or play shouldn't take longer than the match itself. We bridge the gap between players and top-tier facility owners.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="p-6 bg-slate-50 dark:bg-zinc-900/40 border border-slate-200/60 dark:border-zinc-800/60 hover:shadow-md dark:hover:bg-zinc-900 transition-all duration-300 group"
        
            >
              <div className="flex flex-col gap-4">
                {/* Icon Container */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-teal-500 text-white flex items-center justify-center shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg text-center font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;