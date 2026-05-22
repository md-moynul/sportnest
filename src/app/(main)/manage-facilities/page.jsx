import DeleteFacilityModal from "@/components/DeleteFacilityModal";
import FacilityEditModal from "@/components/FacilityEditModal";
import { auth } from "@/lib/auth";
import { getFacilityByEmail } from "@/lib/data";
import { Button, Card, EmptyState } from "@heroui/react";
import { CalendarX, Search } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { CgAddR } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { HiOutlineBuildingOffice, HiOutlineBuildingOffice2 } from "react-icons/hi2";


const ManageFacilitiesPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const email = session?.user?.email
    if (!email) {
        return <div className="container mx-auto py-10">Access Denied. Please log in.</div>
    }

    const userFacilities = await getFacilityByEmail(email)
    // console.log('after use ', userFacilities);
    if (userFacilities.length === 0) {
        return (
             <div className="container mx-auto py-5 md:py-10 lg:py-15 xl:py-20 space-y-10 p-5 md:p-0">
                <h1 className="text-3xl font-bold mb-8">Manage your own facilities</h1>
                <div className="flex flex-col items-center justify-center py-20 border rounded-xl bg-white">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                       <HiOutlineBuildingOffice2 className="w-8 h-8 text-gray-500" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">No facilities found</h2>
                    <p className="text-gray-500 text-center max-w-xs mb-6">
                       Get started by listing your sports complex, court, or field so users can start booking it.
                    </p>
                    <Link href="/all-facility" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                        <FaPlus className="w-4 h-4" /> Add Facilities
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 md:py-15 space-y-10">
            <h2 className="text-2xl md:text-4xl font-bold">Manage your own facilities</h2>
            <div className=" space-y-10">
                {userFacilities.map((facility) => (
                    <Card key={facility._id} className='p-0 overflow-hidden max-w-5xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4'>


                            <div className='relative w-full h-60 md:h-auto md:col-span-3 md:aspect-square'>
                                <Image
                                    src={facility.image}
                                    alt={facility.name}
                                    fill
                                    className="object-center rounded mx-auto" />
                            </div>
                            <div className='px-5 md:col-span-8 flex items-center '>
                                <div className='space-y-2'>


                                    <p className='text-4xl font-semibold text-sky-600'>{facility.name}</p>
                                    <p className="flex gap-3 items-center"><span>Type : {facility.facility_type}</span></p>
                                    <p>Slots : {facility.available_slots}</p>
                                    <p>Capacity : {facility.capacity}</p>
                                    <p className='text-xl font-semibold '>Price: <span className='text-sky-600'>${facility.price_per_hour}</span>/hour</p>
                                </div>
                            </div>
                            <div className='md:col-span-1 flex gap-4  items-center justify-end p-5 '>
                                <FacilityEditModal facility={facility} />
                                <DeleteFacilityModal facility={facility} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ManageFacilitiesPage;