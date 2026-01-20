import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen inset-0'>
            <span className="text-secondary loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loading;