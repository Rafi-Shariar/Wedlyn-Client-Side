import React from 'react';
import LoadingSkeleton from '../shared/LoadingSkeleton';

const LoadingCardsContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton></LoadingSkeleton>
        </div>
    );
};

export default LoadingCardsContainer;