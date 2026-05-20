import { ArrowLeft, ArrowRight, MapPin } from "@gravity-ui/icons";
import { Button, Card, Chip} from "@heroui/react";
import Image from "next/image";

import Love from "./Love";
import Link from "next/link";

const FacilityCard = ({ facility }) => {
    const {_id, name, image, facility_type, price_per_hour, location,booking_count } = facility
    return (
        <Card className="p-0 pb-4 group overflow-hidden">
            <div className="relative w-full aspect-square overflow-hidden">

                <Image src={image} alt={name} fill className="object-center transition-transform duration-300  group-hover:scale-107 " />
                <div className="absolute top-4 right-4">

                    <Love />
                </div>
                <div className="absolute top-4 left-4"><Chip className="bg-sky-100 text-cyan-700 font-bold" size="md">{facility_type}</Chip></div>
            </div>
            <div className="px-4 space-y-3">
                <p className="text-3xl text-sky-600 font-semibold">{name}</p>
                <div className="flex justify-between">
                    <p>Price</p>
                    <p><span className="text-2xl font-bold text-sky-600">${price_per_hour}</span>/h</p>
                </div>
                <p className="flex gap-1 items-center"><MapPin/> {location}</p>
                <Chip className="bg-green-100 text-green-700 font-bold " size="lg">Booked people : {booking_count ? booking_count :0}</Chip>
                <Link href={`/all-facility/${_id}`}><Button className={'w-full flex items-center bg-teal-600 hover:bg-teal-800 '}>Book Now <ArrowRight/></Button></Link>
            </div>
        </Card>
    );
};

export default FacilityCard;