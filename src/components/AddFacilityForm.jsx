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
        const data = await addFacility(facility)
     
    };

    return (
        <Card className="p-5 max-w-3xl mx-auto">
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-6" onSubmit={onSubmit}>

                <TextField
                    isRequired
                    name="facilityName"
                    type="text"

                >
                    <Label>Facility Name</Label>
                    <Input placeholder="Enter facility name" />

                </TextField>
                
                    <Select
                        className="w-full"
                        isRequired
                        name="type"
                        placeholder="Select Facility Type"
                    >
                        <Label>Type</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="football" textValue="Football">
                                    Football
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="cricket" textValue="Cricket">
                                    Cricket
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Basketball" textValue="basketball">
                                    Basketball
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField
                        isRequired
                        name="price"
                        type="number"

                    >
                        <Label>Price (Per Hour)</Label>
                        <Input placeholder="Enter Facility price" />

                    </TextField>
                
                    <TextField
                        isRequired
                        name="location"

                    >
                        <Label>Location</Label>
                        <Input placeholder="Enter location" />

                    </TextField>
                    <TextField
                        isRequired
                        name="capacity"
                        type="number"
                    >
                        <Label>Capacity</Label>
                        <Input placeholder="Enter Capacity" />

                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image</Label>
                        <Input placeholder="Enter image url" />

                    </TextField>
                    <TextField
                        isRequired
                        name="capacity"
                        className={'md:col-span-2'}
                    >
                        <Label>Available Time Slots</Label>
                        <Input placeholder="e.g. 10:00 AM - 12:00 AM" />

                    </TextField>
                     <TextField
                        isRequired
                        name="description"
                        className={'md:col-span-2'}
                    >
                        <Label>Description</Label>
                        <TextArea className={'h-25 '} placeholder="Enter description" />

                    </TextField>
                
               
                    <Button size="lg" className={'w-full bg-sky-600 hover:bg-teal-400 text-white'} type="submit">
                        
                       <Check /> Add Facility
                    </Button>
                    <Button size="lg" className={'w-full bg-slate-700 border-slate-800  hover:bg-teal-400'} type="reset">
                     <ArrowRotateRight /> Reset
                    </Button>

            </Form>
        </Card>
    );
}