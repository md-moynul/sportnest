"use client";

import { updateFacility } from "@/lib/action";
import { ArrowRotateRight, Envelope, Pencil } from "@gravity-ui/icons";
import { Button, Form, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import { Check } from "lucide-react";

export default function FacilityEditModal({ facility }) {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const facilityEditedData = Object.fromEntries(formData);
        await updateFacility(facilityEditedData , facility._id)
        
    }
    return (
        <Modal>
            <Button className={'bg-teal-600 hover:bg-teal-800 text-white rounded-none'} > <Pencil /> Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-6" onSubmit={onSubmit}>

                                    <TextField
                                        defaultValue={facility.name}
                                        isRequired
                                        name="name"
                                        type="text"

                                    >
                                        <Label>Facility Name</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="Enter facility name" />

                                    </TextField>

                                    <Select
                                        defaultValue={facility.facility_type}
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
                                                <ListBox.Item className={'dark:bg-[#5F5E5A]'} id="Football" textValue="Football">
                                                    Football
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item className={'dark:bg-[#5F5E5A]'} id="Cricket" textValue="Cricket">
                                                    Cricket
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item className={'dark:bg-[#5F5E5A]'} id="Basketball" textValue="basketball">
                                                    Basketball
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>

                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                    <TextField
                                        defaultValue={facility.price_per_hour}
                                        isRequired
                                        name="price_per_hour"
                                        type="number"

                                    >
                                        <Label>Price (Per Hour)</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="Enter Facility price" />

                                    </TextField>

                                    <TextField
                                        defaultValue={facility.location}
                                        isRequired
                                        name="location"

                                    >
                                        <Label>Location</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="Enter location" />

                                    </TextField>
                                    <TextField
                                        defaultValue={facility.capacity}
                                        isRequired
                                        name="capacity"
                                        type="number"
                                    >
                                        <Label>Capacity</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="Enter Capacity" />

                                    </TextField>
                                    <TextField
                                        defaultValue={facility.image}
                                        isRequired
                                        name="image"
                                        type="url"
                                    >
                                        <Label>Image</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="Enter image url" />

                                    </TextField>
                                    <TextField
                                        defaultValue={facility.available_slots}
                                        isRequired
                                        name="available_slots"
                                        className={'md:col-span-2'}
                                    >
                                        <Label>Available Time Slots</Label>
                                        <Input className={'dark:bg-[#5F5E5A]'} placeholder="e.g. 10:00 AM - 12:00 AM" />

                                    </TextField>
                                    <TextField
                                        defaultValue={facility.description}
                                        isRequired
                                        name="description"
                                        className={'md:col-span-2'}
                                    >
                                        <Label>Description</Label>
                                        <TextArea className={'h-25 dark:bg-[#5F5E5A]'} placeholder="Enter description" />

                                    </TextField>

                                    <div className="col-span-2 flex ">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button className={'w-full'} type="submit" slot="close">Confirm Change</Button>
                                    </div>
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}