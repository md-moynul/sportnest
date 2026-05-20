
import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <div className="relative w-full h-[85vh] min-h-165 bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">



                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />

                <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center gap-6">

                    <div className="inline-flex items-center gap-2 px-3 py-1  font-semibold tracking-wide text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full backdrop-blur-md">
                        <span className="w-5 h-5 bg-linear-to-r from-sky-400 to-teal-400 shadow-[0_0_8px_#64748b] rounded-full animate-pulse" />
                        SportNest Platform
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                        The modern standard for <br />
                        <span className=" text-sky-400 ">
                            sports facility management.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed">
                        Streamline your booking operations, optimize court scheduling, and elevate player experiences with our all-in-one platform.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                        <Button size="lg" className={'w-full sm:w-auto font-medium text-sm bg-teal-600 hover:bg-teal-800 text-white shadow-lg shadow-sky-600/20 px-8 rounded'}>
                            <Link
                                href="/explore"
                                className=""
                            >
                                Explore Facilities
                            </Link>
                        </Button>
                        <Button size="lg" className={'w-full border sm:w-auto font-medium bg-slate-700 border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500 rounded'}>
                            <Link
                                href="#reviews"
                                className=""
                            >
                                Reviews
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Hero;