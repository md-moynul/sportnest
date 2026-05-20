import Love from "@/components/Love";
import { getFacilityById } from "@/lib/data";
import { ArrowRight, Check, MapPin } from "@gravity-ui/icons";
import { Button, Card, Chip, FieldError, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = async ({ params }) => {
    const { id } = await params

    const facility = await getFacilityById(id)
    console.log(facility);

    const { _id, name, image, facility_type, price_per_hour, location, available_slots, capacity, owner_email, description } = facility

    return (
        <div className="container  mx-auto py-10 md:py-15 space-y-10">

            <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-center text-cyan-600">{name}</h2>
            <Card className="p-0 pb-4 group overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-75 md:h-112 overflow-hidden rounded-3xl">

                    <Image
                        src={image}
                        alt={name}
                        fill

                        className="object-center transition-transform duration-300  group-hover:scale-107 "
                    />
                    <div className="absolute top-4 right-4">

                        <Love />
                    </div>
                    <div className="absolute top-4 left-4"><Chip className="bg-sky-100 text-cyan-700 font-bold" size="md">{facility_type}</Chip></div>
                </div>
                <div className="px-4 flex items-center">
                    <div className="space-y-4">
                        <p>
                            <span>Price : </span>

                            <span className="text-2xl font-bold text-sky-600">${price_per_hour}</span>/h
                        </p>
                        <p className="flex gap-1 items-center"><MapPin /> {location}</p>
                        <p>Type : <span className="text-xl font-bold">{facility_type}</span></p>
                        <p>Available : <span className="text-success font-semibold">{available_slots}</span></p>
                        <p>Capacity : <span className="font-semibold">{capacity}</span> Pe</p>
                        <p>Owner : {owner_email}</p>
                    </div>


                </div>
                <Card className="mt-5 mr-5 flex space-y-5 justify-center">
                    <div>
                        <p className="text-center font-semibold text-xl text-sky-600">Book {name}</p>
                        <form className="space-y-5">
                            <TextField
                                name="bookingDate"
                                className={'md:col-span-2'}
                                type="date"
                                isRequired>
                                <Label>Date</Label>
                                <Input type="date" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                name="time_slot"
                                className={'md:col-span-2'}>
                                <Label>Time Slots</Label>
                                <Input className={'dark:bg-[#5F5E5A]'} placeholder="e.g. 10:00 AM - 12:00 AM" />

                            </TextField>
                         <Button size="lg" className={'w-full bg-sky-600 hover:bg-teal-600 text-white'} type="submit">
                        
                       <Check />Book
                    </Button>
                        </form>
                    </div>
                </Card>
                <div className="p-5 col-span-1 md:col-span-3">
                    <p className="text-2xl font-bold">Description </p>
                    {description}
                </div>
            </Card>
        </div >
    );
};

export default DetailsPage;