import AddFacilityForm from '@/components/AddFacilityForm';
import React from 'react';

const AddFacilityPage = () => {
    return (
        <div className='container mx-auto py-5 md:py-10 lg:py-15 xl:py-20 space-y-10'>
            <h2 className='text-3xl font-bold text-sky-600'>Add Facility </h2>
            <AddFacilityForm/>
        </div>
    );
};

export default AddFacilityPage;