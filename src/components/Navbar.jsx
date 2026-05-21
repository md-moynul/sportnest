'use client'
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import UserAvatarModal from "./UserAvatarModal";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linksData =[
        { href: '/', name: "Home" },
        { href: '/all-facility', name: "All Facility" },
        { href: '/my-bookings', name: "My Bookings" },
        { href: '/add-facility', name: "Add Facility" },
    ]
    // TODO : not get session wait for support
    const { data: session, isPending } = authClient.useSession();
  if(isPending){
    return
  }
    const user = session?.user
//    console.log(user);
   
    

    return (

        <nav className="sticky top-0 z-40 w-full border-b border-separator dark:bg-gray-900 bg-background/70 backdrop-blur-lg">
            <header className="flex h-18 items-center justify-between px-6 container mx-auto">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-0.5 md:gap-2">
                        <Image className="w-8 md:w-10 h-8 md:h-10 " src={'/assets/logo.png'} alt='loge' width={50} height={50} />
                        <p className="font-bold text-xl md:text-3xl">
                            <span className=" text-sky-600">Sport</span>
                            <span className="text-teal-600">Nest</span></p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex font-bold">
                    {linksData.map((d,i) => <li key={i}><Link href={d.href}>{d.name}</Link></li>)}
                </ul>
                <div>
                    {user ?
                        <UserAvatarModal user={user} linksData={linksData} /> :
                        <Link href={'/login'}><Button variant="primary" className={'rounded-none bg-sky-600'}>login</Button></Link>
                    }
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                       {linksData.map((d,i) => <li key={i}><Link href={d.href}>{d.name}</Link></li>)}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;