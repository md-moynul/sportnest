import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center gap-4 min-h-screen justify-center">
            <Spinner />
        </div>
    );
};

export default LoadingPage;