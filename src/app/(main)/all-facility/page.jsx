'use client'
import FacilityCard from "@/components/FacilityCard";
import { Label, SearchField } from "@heroui/react";
import { useEffect, useState } from "react";


const AllFacilityPage = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [allFacilities, setAllFacilities] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllFacilityBySearch = async (search, type) => {
        console.log('from fun', search);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?search=${search}&type=${type}`)
        return res.json()
    }
    // console.log(search);
    useEffect(() => {
        const loadFacilities = async () => {
            const data = await getAllFacilityBySearch(search, type);
            setAllFacilities(data);
            setLoading(false)
        };
        loadFacilities()

    }, [search, type])
    console.log(allFacilities);

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
            <div className=" bg-white py-2 px-5 rounded-xl">


                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10  mx-auto my-5">
                    <div className="w-xs">
                        <SearchField name="search" onChange={(value) => setSearch(value)
                        }>
                            <Label>Search</Label>
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input className="" placeholder="Search..." />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>
                    </div>
                    <div>
                        <div className="w-xs">
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full px-4 md:px-5 py-3 rounded-xl border text-sm md:text-base focus:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                                <option value="">All Types</option>
                                <option value="Football">Football</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Badminton">Badminton</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h2 className="text-3xl font-bold">All Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allFacilities.map(facility => <FacilityCard key={facility._id} facility={facility} />)}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllFacilityPage;