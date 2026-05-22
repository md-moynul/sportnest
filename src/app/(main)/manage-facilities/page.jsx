import DeleteFacilityModal from "@/components/DeleteFacilityModal";
import FacilityEditModal from "@/components/FacilityEditModal";
import { auth } from "@/lib/auth";
import { getFacilityByEmail } from "@/lib/data";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
// Import a proper child component if you have one, for example:
// import FacilityCard from "@/components/FacilityCard";

const ManageFacilitiesPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const email = session?.user?.email
    if (!email) {
        return <div className="container mx-auto py-10">Access Denied. Please log in.</div>
    }

    const userFacilities = await getFacilityByEmail(email)
    console.log('after use ', userFacilities);

    return (
        <div className="container mx-auto py-10 md:py-15 space-y-10">
            <h2 className="text-2xl md:text-4xl font-bold">Manage your own facilities</h2>
            <div className=" space-y-10">
                {userFacilities.map((facility) => (
                    <Card key={facility._id} className='p-0 overflow-hidden max-w-5xl mx-auto'>
                                <div  className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4'>
                    
                    
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