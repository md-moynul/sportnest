"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center bg-white dark:bg-zinc-950 px-6 py-16 transition-colors">
            <div className="max-w-xl w-full text-center flex flex-col items-center">

                {/* Animated Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/20 rounded-full animate-pulse">
                    🚨 Out of Bounds
                </span>

                {/* Big Stylized 404 Header */}
                <h1 className="mt-6 text-8xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white select-none">
                    4<span className="text-teal-500 inline-block hover:rotate-12 transition-transform duration-300">0</span>4
                </h1>

                {/* Contextual Sub-heading */}
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-zinc-100 tracking-tight">
                    Whistle Blown! Page Not Found.
                </h2>

                {/* Playful Copy */}
                <p className="mt-4 text-slate-500 dark:text-zinc-400 text-base leading-relaxed">
                    Looks like you made a wrong run or the facility you are looking for has been booked up and moved. Don't let the game stop herelet's get you back on the field.
                </p>

                {/* Graphic Accent (A minimalist court/field representation) */}
                <div className="w-full max-w-[280px] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent my-8 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-500 border-2 border-white dark:border-zinc-950 shadow-sm" />
                </div>

                {/* Interactive Navigation Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link href={'/'}>
                        <Button
                            size="lg"
                            radius="xl"
                            className="bg-teal-500 text-white font-semibold shadow-md shadow-teal-500/10 hover:bg-teal-600 transition-all px-8"
                        >
                            Back to Home Base
                        </Button>
                    </Link>
                    <Link href="/all-facility">
                        <Button
                            size="lg"
                            radius="xl"
                            variant="bordered"
                            className="border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all px-8"
                        >
                            Explore Facilities
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}