import FacilityCard from "@/components/FacilityCard";
import { getAllFacility } from "@/lib/data";
import { Card } from "@heroui/react";
import Image from "next/image";

const AllFacilityPage = async () => {
    const allFacility = await getAllFacility()
    // console.log(allFacility);

    return (
        <div className="py-10 md:py-15 container mx-auto space-y-10">
            <div className="text-center space-y-4">
                <h2 className=" text-2xl md:text-4xl lg:text-6xl font-extrabold">
                    <span className=" text-sky-600">Sport</span>
                    <span className="text-teal-600">Nest</span>
                </h2>
                <p className="text-xl  md:text-2xl font-semibold text-sky-300">Book & Play</p>
                <p className="text-gray-600 dark:text-gray-300">Browse and instantly book from our full range of premium sports facilities. Available 7 days a week.</p>
            </div>
            <div className="space-y-5">
                <h2 className="text-3xl font-bold">All Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {allFacility.map(facility =><FacilityCard key={facility._id} facility={facility} />)}
                </div>
            </div>
        </div >
    );
};

export default AllFacilityPage;