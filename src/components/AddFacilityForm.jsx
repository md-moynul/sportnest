"use client";

import { addFacility } from "@/lib/action";
import { Check } from "@gravity-ui/icons";
import {ArrowRotateRight} from '@gravity-ui/icons';
import { Button, Card, Select, Form, Input, Label, TextField, ListBox, TextArea } from "@heroui/react";

export default function AddFacilityForm() {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData);
        facility.owner_email = 'moynul@gmail.com';
        facility.booking_count = 0;
        // console.log(facility)
        
        const data = await addFacility(facility)
     
    };

    return (
        <Card className="p-5 max-w-3xl mx-auto ">
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-6" onSubmit={onSubmit}>

                <TextField
              
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Facility Name</Label>
                    <Input   className={'dark:bg-[#5F5E5A]'} placeholder="Enter facility name" />

                </TextField>
                
                    <Select
                        className="w-full "
                        isRequired
                        name="facility_type"
                        placeholder="Select Facility Type"
                    >
                        <Label>Type</Label>
                        <Select.Trigger className={'dark:bg-[#5F5E5A]'}>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox className="space-y-2">
                                <ListBox.Item   className={'dark:bg-[#5F5E5A]'}  id="Football" textValue="Football">
                                    Football
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item className={'dark:bg-[#5F5E5A]'}  id="Cricket" textValue="Cricket">
                                    Cricket
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item className={'dark:bg-[#5F5E5A]'}  id="Basketball" textValue="basketball">
                                    Basketball
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField
                        isRequired
                        name="price_per_hour"
                        type="number"

                    >
                        <Label>Price (Per Hour)</Label>
                        <Input className={'dark:bg-[#5F5E5A]'}  placeholder="Enter Facility price" />

                    </TextField>
                
                    <TextField
                        isRequired
                        name="location"

                    >
                        <Label>Location</Label>
                        <Input className={'dark:bg-[#5F5E5A]'}  placeholder="Enter location" />

                    </TextField>
                    <TextField
                        isRequired
                        name="capacity"
                        type="number"
                    >
                        <Label>Capacity</Label>
                        <Input className={'dark:bg-[#5F5E5A]'}  placeholder="Enter Capacity" />

                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image</Label>
                        <Input className={'dark:bg-[#5F5E5A]'}  placeholder="Enter image url" />

                    </TextField>
                    <TextField
                        isRequired
                        name="available_slots"
                        className={'md:col-span-2'}
                    >
                        <Label>Available Time Slots</Label>
                        <Input className={'dark:bg-[#5F5E5A]'}  placeholder="e.g. 10:00 AM - 12:00 AM" />

                    </TextField>
                     <TextField
                        isRequired
                        name="description"
                        className={'md:col-span-2'}
                    >
                        <Label>Description</Label>
                        <TextArea className={'h-25 dark:bg-[#5F5E5A]'} placeholder="Enter description" />

                    </TextField>
                
               
                    <Button size="lg" className={'w-full bg-sky-600 hover:bg-teal-600 text-white'} type="submit">
                        
                       <Check /> Add Facility
                    </Button>
                    <Button size="lg" className={'w-full bg-slate-700 border-slate-800  hover:bg-teal-600'} type="reset">
                     <ArrowRotateRight /> Reset
                    </Button>

            </Form>
        </Card>
    );
}