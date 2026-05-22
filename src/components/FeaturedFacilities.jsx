import { getFeaturedFacility } from "@/lib/data";
import FacilityCard from "./FacilityCard";

const FeaturedFacilities = async () => {
    const featuredFacility = await getFeaturedFacility();
    return (
        <div className="container mx-auto py-5 md:py-10 lg:py-15 space-y-10">
            <h2 className="text-2xl md:text-4xl font-bold">Featured Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredFacility.map(facility => <FacilityCard facility={facility} key={facility._id} />)}
            </div>
        </div>
    );
};

export default FeaturedFacilities;